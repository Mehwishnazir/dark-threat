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
  const [copied, setCopied] = useState(false);

  const post = allBlogs.find((p) => p.slug === slug);
  const relatedPosts = allBlogs.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
      } catch {}
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
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishDate,
    author: { "@type": "Person", name: post.author || "DarkThreat Team" },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | DarkThreat Blog</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article
          className="blog-post-article"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* SHARE */}
        <div className="mt-10 flex gap-3">
          <Button onClick={handleShare}>
            {copied ? <LinkIcon /> : <Share2 />}
          </Button>
        </div>
      </main>

      {/* RELATED */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((r) => (
            <BlogCard key={r.id} post={r} />
          ))}
        </div>
      </section>

      {/* SCROLL TOP */}
      {showScrollTop && (
        <button className="blog-post-scroll-top" onClick={scrollToTop}>
          <ArrowUp />
        </button>
      )}
    </>
  );
};

export default BlogPost;
