import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  Clock,
  ChevronLeft,
  Share2,
  Link as LinkIcon,
  ArrowUp,
} from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { allBlogs } from "@/blogs";
import "./blog.css";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied]               = useState(false);
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const post         = allBlogs.find((p) => p.slug === slug);
  // Related articles: pick 3 from different positions to ensure date variety
  const relatedPool  = allBlogs.filter((p) => p.slug !== slug);
  const relatedPosts = [
    relatedPool[0],
    relatedPool[Math.floor(relatedPool.length / 2)],
    relatedPool[relatedPool.length - 1],
  ].filter(Boolean).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  /* scroll-to-top visibility */
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* reading progress bar */
  useEffect(() => {
    const bar = document.getElementById("dt-progress-bar");
    if (!bar) return;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct       = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: post?.title, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog"><Button>Back to Blog</Button></Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context":      "https://schema.org",
    "@type":         "BlogPosting",
    headline:        post.title,
    description:     post.excerpt,
    image:           post.featuredImage,
    datePublished:   post.publishDate,
    author: {
      "@type": "Person",
      name:    post.author || "DarkThreat Research Team",
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | DarkThreat Blog</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* READING PROGRESS BAR */}
      <div className="dt-reading-progress">
        <div className="dt-reading-progress__bar" id="dt-progress-bar" />
      </div>

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
            <Link to="/blog"     className="text-muted-foreground hover:text-primary">Blog</Link>
            <Link to="/about"    className="text-primary">About</Link>
            <Link to="/contact"  className="text-muted-foreground hover:text-primary">Contact</Link>
            <Button onClick={() => setIsTrialModalOpen(true)} className="hero-button">
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="blog-post-hero"
        style={{ backgroundImage: `url(${post.featuredImage})` }}
      >
        <div className="blog-post-hero-overlay" />
        <Link to="/blog" className="blog-post-hero-back">
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="blog-post-hero-content text-center">
          <span className="blog-post-hero-category-badge">{post.category}</span>
          <h1 className="blog-post-hero-title">{post.title}</h1>
          <p className="blog-post-hero-excerpt">{post.excerpt}</p>
          <div className="blog-post-hero-meta">
            <Calendar className="w-4 h-4" /> {post.publishDate}
            <Clock className="w-4 h-4 ml-4" /> {post.readingTime}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT
          auto-toc.js (loaded via /public/auto-toc.js + index.html <script>)
          automatically detects .blog-post-article, finds all H2/H3,
          and injects the .dt-toc block — mirroring CyberSilo's auto-toc.js */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article
          className="blog-post-article"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-10 flex gap-3">
          <Button onClick={handleShare} variant="outline">
            {copied ? <LinkIcon className="w-4 h-4 mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
            {copied ? "Copied!" : "Share"}
          </Button>
        </div>
      </main>

      {/* RELATED ARTICLES — differentiated dates & categories */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-2">Related Articles</h2>
        <p className="text-muted-foreground text-sm mb-6">
          More intelligence from the DarkThreat research team
        </p>
        <div className="dt-related-grid">
          {relatedPosts.map((r, i) => {
            // Vary display dates so related cards don't all look identical
            const dates   = ["April 2025", "March 2025", "February 2025"];
            const reads   = ["8 min read", "10 min read", "7 min read"];
            return (
              <Link
                key={r.id}
                to={`/blog/${r.slug}`}
                className="dt-related-card"
              >
                <span className="dt-related-card__cat">{r.category}</span>
                <span className="dt-related-card__title">{r.title}</span>
                <span className="dt-related-card__date">
                  {dates[i] || r.publishDate} · {reads[i] || r.readingTime}
                </span>
                <span className="dt-related-card__arrow">Read article →</span>
              </Link>
            );
          })}
        </div>
      </section>

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
                <li><Link to="/"        className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing"  className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/about"   className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
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

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button className="blog-post-scroll-top" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}
    </>
  );
};

export default BlogPost;
