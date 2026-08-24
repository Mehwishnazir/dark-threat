import "server-only";

import { allBlogs as registry } from "@/blogs";
import { resolveFeaturedImage } from "@/lib/blog/resolveFeaturedImage";
import type { BlogPostMeta, FullBlogPost } from "@/lib/blog/types";

const posts = registry as FullBlogPost[];

function withResolvedImage(post: FullBlogPost): FullBlogPost {
  return {
    ...post,
    featuredImage: resolveFeaturedImage(post.featuredImage, post.slug),
  };
}

function toMeta(post: FullBlogPost): BlogPostMeta {
  const resolved = withResolvedImage(post);
  return {
    id: resolved.id,
    slug: resolved.slug,
    title: resolved.title,
    excerpt: resolved.excerpt,
    featuredImage: resolved.featuredImage,
    category: resolved.category,
    publishDate: resolved.publishDate,
    readingTime: resolved.readingTime,
    author: resolved.author,
  };
}

export function getAllBlogPosts(): FullBlogPost[] {
  return posts.map(withResolvedImage);
}

export function getBlogPostMetaList(): BlogPostMeta[] {
  return posts
    .map(toMeta)
    .slice()
    .sort((a, b) => {
      const aTs = Date.parse(a.publishDate) || 0;
      const bTs = Date.parse(b.publishDate) || 0;
      return bTs - aTs;
    });
}

export function getBlogPostBySlug(slug: string): FullBlogPost | undefined {
  const post = posts.find((p) => p.slug === slug);
  return post ? withResolvedImage(post) : undefined;
}

export function getAllBlogSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPostMeta[] {
  const sameCategory = posts.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
  if (sameCategory.length > 0) return sameCategory.map(toMeta);
  return posts.filter((p) => p.slug !== slug).slice(0, limit).map(toMeta);
}

export function getPostsByAuthorName(authorName: string): BlogPostMeta[] {
  const matched = posts.filter(
    (p) => (p.author || "").toLowerCase() === authorName.toLowerCase()
  );
  return (matched.length > 0 ? matched : posts.slice(0, 6)).map(toMeta);
}

export function getBlogPostCount(): number {
  return posts.length;
}
