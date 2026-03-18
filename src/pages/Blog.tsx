import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, Linkedin, Twitter, Github, Search, X } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { allBlogs } from "@/blogs";
import "./blog.css";
 
const CATEGORIES = ["All", "Threat Intelligence", "Cybersecurity"];
const PAGE_SIZE = 12;
 
const Blog = () => {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage]         = useState(1);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
 
  const filtered = useMemo(() => {
    return allBlogs.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, category]);
 
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
 
  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };
 
  const handleCategory = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };
 
  return (
    <>
      <Helmet>
        <title>Blog | DarkThreat — Dark Web Monitoring Insights</title>
        <meta
          name="description"
          content="Expert articles on dark web monitoring, threat intelligence, credential leak detection, and cybersecurity best practices."
        />
      </Helmet>
 
      {/* HEADER */}
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-oswald font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/"         className="text-muted-foreground hover:text-primary">Home</Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link>
            <Link to="/pricing"  className="text-muted-foreground hover:text-primary">Pricing</Link>
            <Link to="/blog"     className="text-primary font-semibold">Blog</Link>
            <Link to="/about"    className="text-muted-foreground hover:text-primary">About</Link>
            <Link to="/contact"  className="text-muted-foreground hover:text-primary">Contact</Link>
            <Button onClick={() => setIsTrialModalOpen(true)} className="hero-button">
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>
 
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(0 0% 6%) 50%, hsl(0 60% 5%) 100%)",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid hsl(var(--border))",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              display: "inline-block",
              padding: ".4rem 1.25rem",
              background: "rgba(255,0,0,.12)",
              color: "hsl(var(--primary))",
              fontSize: ".72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: ".12em",
              borderRadius: "9999px",
              border: "1px solid rgba(255,0,0,.3)",
              marginBottom: "1.25rem",
            }}
          >
            DarkThreat Intelligence Hub
          </span>
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "hsl(var(--foreground))",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            DARK WEB SECURITY BLOG
          </h1>
          <p
            style={{
              color: "hsl(var(--muted-foreground))",
              fontSize: "1.05rem",
              maxWidth: "560px",
              margin: "0 auto 2rem",
              lineHeight: 1.75,
            }}
          >
            Expert insights on dark web monitoring, threat intelligence, credential leaks, and protecting your business from cybercriminals.
          </p>
 
          {/* Search bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              maxWidth: "480px",
              margin: "0 auto",
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: ".65rem",
              padding: ".5rem .75rem",
              gap: ".5rem",
            }}
          >
            <Search style={{ width: 18, height: 18, color: "hsl(var(--muted-foreground))", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "hsl(var(--foreground))",
                fontSize: ".9rem",
              }}
            />
            {search && (
              <button
                onClick={() => handleSearch("")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "hsl(var(--muted-foreground))", lineHeight: 0 }}
              >
                <X style={{ width: 15, height: 15 }} />
              </button>
            )}
          </div>
        </div>
      </section>
 
      {/* FILTERS + COUNT */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              style={{
                padding: ".4rem 1rem",
                borderRadius: "9999px",
                border: `1px solid ${category === cat ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
                background: category === cat ? "rgba(255,0,0,.12)" : "transparent",
                color: category === cat ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                fontWeight: category === cat ? 700 : 400,
                fontSize: ".82rem",
                cursor: "pointer",
                transition: "all .15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <span style={{ fontSize: ".82rem", color: "hsl(var(--muted-foreground))" }}>
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>
 
      {/* GRID */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {paginated.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 0", color: "hsl(var(--muted-foreground))" }}>
            <p style={{ fontSize: "1.1rem" }}>No articles found for your search.</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              style={{ marginTop: "1rem", color: "hsl(var(--primary))", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
 
        {/* PAGINATION */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: ".5rem", marginTop: "3rem", flexWrap: "wrap" }}>
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              style={{
                padding: ".45rem 1rem",
                borderRadius: ".45rem",
                border: "1px solid hsl(var(--border))",
                background: "transparent",
                color: page === 1 ? "hsl(var(--muted-foreground))" : "hsl(var(--foreground))",
                cursor: page === 1 ? "not-allowed" : "pointer",
                fontSize: ".85rem",
              }}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                style={{
                  padding: ".45rem .85rem",
                  borderRadius: ".45rem",
                  border: `1px solid ${n === page ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
                  background: n === page ? "rgba(255,0,0,.12)" : "transparent",
                  color: n === page ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                  fontWeight: n === page ? 700 : 400,
                  cursor: "pointer",
                  fontSize: ".85rem",
                }}
              >
                {n}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              style={{
                padding: ".45rem 1rem",
                borderRadius: ".45rem",
                border: "1px solid hsl(var(--border))",
                background: "transparent",
                color: page === totalPages ? "hsl(var(--muted-foreground))" : "hsl(var(--foreground))",
                cursor: page === totalPages ? "not-allowed" : "pointer",
                fontSize: ".85rem",
              }}
            >
              Next
            </button>
          </div>
        )}
      </main>
 
      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-oswald font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Github   className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-oswald font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/"         className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing"  className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/about"    className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact"  className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-oswald font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy"  className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/platform-terms"  className="text-muted-foreground hover:text-primary">Platform Terms</Link></li>
                <li><Link to="/website-terms"   className="text-muted-foreground hover:text-primary">Website Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            © 2025 DarkThreat. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
 
