"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import {
  BLOG_IMAGE_FALLBACKS,
  pickBlogImageFallback,
  resolveFeaturedImage,
} from "@/lib/blog/resolveFeaturedImage";

export type { BlogPost } from "@/lib/blog/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  const initial = resolveFeaturedImage(post.featuredImage, post.slug);
  const [src, setSrc] = useState(initial);

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card__image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={post.title}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="blog-card__image"
          onError={() => {
            const current = BLOG_IMAGE_FALLBACKS.indexOf(
              src as (typeof BLOG_IMAGE_FALLBACKS)[number]
            );
            const next =
              current >= 0
                ? BLOG_IMAGE_FALLBACKS[(current + 1) % BLOG_IMAGE_FALLBACKS.length]
                : pickBlogImageFallback(post.slug);
            if (next !== src) setSrc(next);
          }}
        />
        <span className="blog-card__category">{post.category}</span>
        <div className="blog-card__overlay">
          <span className="blog-card__read-cta">
            Read Article <ArrowRight className="blog-card__arrow" />
          </span>
        </div>
      </Link>

      <div className="blog-card__body">
        <Link href={`/blog/${post.slug}`} className="blog-card__title-link">
          <h2 className="blog-card__title">{post.title}</h2>
        </Link>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__meta">
          <span className="blog-card__meta-item">
            <Calendar className="blog-card__meta-icon" />
            {post.publishDate}
          </span>
          <span className="blog-card__meta-item">
            <Clock className="blog-card__meta-icon" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}
