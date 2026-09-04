import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Twitter, Linkedin } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import {
  getAllAuthorSlugs,
  getAuthorBySlug,
} from "@/lib/blog/authors";
import { getPostsByAuthorName } from "@/lib/blog/data";
import { pageAlternates, pageOpenGraph } from "@/lib/metadata";
import "@/app/blog/blog.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function truncateMetaDescription(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  return `${lastSpace > 0 ? slice.slice(0, lastSpace) : slice}...`;
}

export function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) {
    return { title: "Author Not Found" };
  }

  return {
    title: `${author.name} | DarkThreat Author`,
    description: truncateMetaDescription(author.bio),
    alternates: pageAlternates(`/author/${author.slug}`),
    openGraph: pageOpenGraph(`/author/${author.slug}`),
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = getPostsByAuthorName(author.name);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          jobTitle: author.jobTitle,
          url: `https://darkthreat.ai/author/${author.slug}`,
          sameAs: [author.twitter, author.linkedin].filter(Boolean),
          description: author.bio,
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: author.name },
          ]}
        />

        <section className="flex flex-col md:flex-row gap-8 items-start mb-16 mt-6">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
            <span className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              {author.initials}
            </span>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-montserrat font-bold text-foreground mb-2">
              {author.name}
            </h1>
            <p className="text-primary font-medium mb-4">{author.jobTitle}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{author.bio}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {author.expertise.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card border border-border rounded-full text-xs text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">
            Articles by {author.name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">
              No articles yet.{" "}
              <Link href="/blog" className="text-primary hover:underline">
                Browse the blog
              </Link>
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
