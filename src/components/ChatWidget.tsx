import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X, Send, RotateCcw, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Msg = {
  role: "user" | "assistant";
  content: string;
  ts: number;
};

const STORAGE_KEY = "darkthreat_chat_session";
const IDLE_TIMEOUT_MS = 30 * 60 * 1000; // 30 min
const CLIENT_RATE_WINDOW_MS = 60_000;
const CLIENT_RATE_MAX = 15;

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi! I'm the DarkThreat assistant. Ask me about dark web monitoring, our solutions, pricing, or starting a free trial.",
  ts: Date.now(),
};

function loadSession(): Msg[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME];
    const parsed = JSON.parse(raw) as { messages: Msg[]; updated: number };
    if (!parsed?.messages || Date.now() - parsed.updated > IDLE_TIMEOUT_MS) return [WELCOME];
    return parsed.messages;
  } catch {
    return [WELCOME];
  }
}

function saveSession(messages: Msg[]) {
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ messages, updated: Date.now() }),
    );
  } catch {}
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() =>
    typeof window === "undefined" ? [WELCOME] : loadSession(),
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unread, setUnread] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const rateBucket = useRef<number[]>([]);

  useEffect(() => saveSession(messages), [messages]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, messages]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(e?: FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    // Client-side rate limit
    const now = Date.now();
    rateBucket.current = rateBucket.current.filter((t) => now - t < CLIENT_RATE_WINDOW_MS);
    if (rateBucket.current.length >= CLIENT_RATE_MAX) {
      setError("You're sending messages too quickly. Please wait a moment.");
      return;
    }
    rateBucket.current.push(now);

    setError(null);
    setInput("");
    const userMsg: Msg = { role: "user", content: text, ts: Date.now() };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("chat-completion", {
        body: {
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        },
      });

      if (fnError) throw fnError;
      const reply: string | undefined = data?.reply;
      const errMsg: string | undefined = data?.error;
      if (errMsg) throw new Error(errMsg);
      if (!reply) throw new Error("No response from assistant.");

      const aiMsg: Msg = { role: "assistant", content: reply, ts: Date.now() };
      setMessages((prev) => {
        const updated = [...prev, aiMsg];
        if (!open) setUnread((u) => u + 1);
        return updated;
      });
    } catch (err: any) {
      const msg =
        typeof err?.message === "string" && err.message.length < 200
          ? err.message
          : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  function resetChat() {
    setMessages([WELCOME]);
    setError(null);
    sessionStorage.removeItem(STORAGE_KEY);
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat with DarkThreat assistant"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_hsl(0_78%_45%/0.5)] hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MessageCircle className="w-6 h-6" aria-hidden />
          {unread > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
              {unread}
            </span>
          )}
        </button>
      )}

      {/* Window */}
      {open && (
        <div
          role="dialog"
          aria-label="DarkThreat assistant chat"
          aria-modal="false"
          className="fixed z-[95] bg-card border border-border shadow-2xl flex flex-col
                     inset-0 sm:inset-auto sm:bottom-6 sm:right-6
                     sm:w-[380px] sm:h-[560px] sm:max-h-[80vh]
                     sm:rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground font-montserrat truncate">
                  DarkThreat Assistant
                </p>
                <p className="text-[11px] text-muted-foreground">Online • AI-powered</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                aria-label="Start new conversation"
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-background"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[85%]">
                  <div
                    className={
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-3 py-2 text-sm whitespace-pre-wrap break-words"
                        : "bg-muted text-foreground rounded-2xl rounded-bl-sm px-3 py-2 text-sm whitespace-pre-wrap break-words border border-border"
                    }
                  >
                    {m.content}
                  </div>
                  <p
                    className={`text-[10px] mt-1 text-muted-foreground ${
                      m.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {formatTime(m.ts)}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-3 py-2 text-sm text-muted-foreground inline-flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Thinking…
                </div>
              </div>
            )}
            {error && (
              <div
                role="alert"
                className="text-xs text-destructive bg-destructive/10 border border-destructive/30 rounded-md px-3 py-2"
              >
                {error}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={send}
            className="border-t border-border p-2 bg-card flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask about dark web monitoring, pricing, trial…"
              rows={1}
              maxLength={2000}
              aria-label="Type your message"
              className="flex-1 resize-none bg-input border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring max-h-32"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
