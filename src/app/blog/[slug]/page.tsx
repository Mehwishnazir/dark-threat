import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/lib/blog/data";
import { resolveFeaturedImage } from "@/lib/blog/resolveFeaturedImage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const ogImage = resolveFeaturedImage(post.featuredImage, post.slug);

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://darkthreat.ai/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);
  const headline = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const featuredImage = resolveFeaturedImage(post.featuredImage, post.slug);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline,
          description,
          image: featuredImage,
          datePublished: post.publishDate,
          dateModified: post.publishDate,
          url: `https://darkthreat.ai/blog/${post.slug}`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://darkthreat.ai/blog/${post.slug}`,
          },
          author: {
            "@type": "Person",
            name: post.author || "Dr. Ayaan Rahman",
            url: "https://darkthreat.ai/author/dr-ayaan-rahman",
          },
          publisher: {
            "@type": "Organization",
            name: "DarkThreat",
            logo: {
              "@type": "ImageObject",
              url: "https://darkthreat.ai/logo.png",
              width: 200,
              height: 60,
            },
          },
        }}
      />

      <section
        className="blog-post-hero pt-8"
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <div className="blog-post-hero-overlay" />
        <Link href="/blog" className="blog-post-hero-back">
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
          <div className="mt-3 text-sm text-white/80">
            By{" "}
            <Link
              href="/author/dr-ayaan-rahman"
              className="text-primary hover:underline font-medium"
            >
              {post.author || "Dr. Ayaan Rahman"}
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
        <article
          className="blog-post-article"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <BlogCard key={r.id} post={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
