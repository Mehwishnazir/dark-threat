// Deprecated: kept as a thin proxy to the unified contact-form function so any
// legacy callers continue to work. New callers should invoke `contact-form` directly.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const projectRef = Deno.env.get("SUPABASE_URL")?.match(/https?:\/\/([^.]+)\./)?.[1];
  const target = Deno.env.get("SUPABASE_URL")
    ? `${Deno.env.get("SUPABASE_URL")}/functions/v1/contact-form`
    : `https://${projectRef}.supabase.co/functions/v1/contact-form`;

  try {
    const body = await req.text();
    const res = await fetch(target, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers.get("authorization") ?? "",
        apikey: req.headers.get("apikey") ?? "",
      },
      body,
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[submit-form proxy] failed", e);
    return new Response(JSON.stringify({ error: "Proxy failure" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
