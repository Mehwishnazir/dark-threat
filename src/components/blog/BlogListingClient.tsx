"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import type { BlogPostMeta } from "@/lib/blog/types";
import {
  BLOG_IMAGE_FALLBACKS,
  pickBlogImageFallback,
  resolveFeaturedImage,
} from "@/lib/blog/resolveFeaturedImage";

const POSTS_PER_PAGE = 12;
const CATEGORIES = ["All Blogs", "Threat Intelligence", "Cybersecurity"];

export default function BlogListingClient({ posts }: { posts: BlogPostMeta[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [page, setPage] = useState(1);
  const [heroSrcOverride, setHeroSrcOverride] = useState<string | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Blogs": posts.length };
    for (const post of posts) {
      counts[post.category] = (counts[post.category] || 0) + 1;
    }
    return counts;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === "All Blogs" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const loadedCount = Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(0, currentPage * POSTS_PER_PAGE);
  const showHero = currentPage === 1 && searchQuery === "";
  const heroPost = showHero ? paginatedPosts[0] : null;
  const gridPosts = showHero ? paginatedPosts.slice(1) : paginatedPosts;
  const heroImageSrc =
    heroSrcOverride ||
    (heroPost ? resolveFeaturedImage(heroPost.featuredImage, heroPost.slug) : "");

  const resetPage = () => {
    setPage(1);
    setHeroSrcOverride(null);
  };

  return (
    <>
      <section className="blog-listing-filters">
        <div className="blog-listing-filters__inner">
          <div className="blog-listing-filters__search">
            <label htmlFor="blog-search-input" className="sr-only">
              Search blog articles
            </label>
            <Search className="blog-listing-filters__search-icon" />
            <input
              id="blog-search-input"
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                resetPage();
              }}
              className="blog-listing-filters__search-input"
              aria-label="Search blog articles"
            />
          </div>

          <div className="blog-listing-filters__dropdown">
            <label htmlFor="category-select" className="blog-listing-filters__dropdown-label">
              Filter by Category:
            </label>
            <select
              id="category-select"
              className="blog-listing-filters__select-trigger"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                resetPage();
              }}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                  {categoryCounts[cat] != null ? ` (${categoryCounts[cat]})` : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="blog-listing-content">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="blog-listing-focus-line">Important and recent articles are shown first.</div>
        <div className="blog-listing-results-bar" aria-live="polite" aria-atomic="true">
          <div className="blog-listing-results-bar__summary">
            <span className="blog-listing-results-bar__label">Showing</span>
            <strong>{loadedCount}</strong>
            <span className="blog-listing-results-bar__label">of</span>
            <strong>{filteredPosts.length}</strong>
            <span className="blog-listing-results-bar__label">articles</span>
          </div>
          {searchQuery && (
            <span className="blog-listing-results-bar__query">
              for &quot;<em>{searchQuery}</em>&quot;
            </span>
          )}
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="blog-listing-empty">
            <p>No articles found matching your criteria.</p>
          </div>
        ) : (
          <>
            {heroPost && (
              <Link href={`/blog/${heroPost.slug}`} className="blog-hero-card">
                <div className="blog-hero-card__image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImageSrc}
                    alt={heroPost.title}
                    width={1200}
                    height={675}
                    loading="eager"
                    decoding="async"
                    className="blog-hero-card__image"
                    onError={() => {
                      const path = heroImageSrc;
                      const idx = BLOG_IMAGE_FALLBACKS.indexOf(
                        path as (typeof BLOG_IMAGE_FALLBACKS)[number]
                      );
                      const next =
                        idx >= 0
                          ? BLOG_IMAGE_FALLBACKS[(idx + 1) % BLOG_IMAGE_FALLBACKS.length]
                          : pickBlogImageFallback(heroPost.slug);
                      setHeroSrcOverride(next);
                    }}
                  />
                </div>
                <div className="blog-hero-card__body">
                  <span className="blog-hero-card__category">{heroPost.category}</span>
                  <h2 className="blog-hero-card__title">{heroPost.title}</h2>
                  <p className="blog-hero-card__excerpt">{heroPost.excerpt}</p>
                  <div className="blog-hero-card__meta">
                    <span className="blog-hero-card__meta-item">
                      <Calendar className="blog-hero-card__meta-icon" />
                      {heroPost.publishDate}
                    </span>
                    <span className="blog-hero-card__meta-item">
                      <Clock className="blog-hero-card__meta-icon" />
                      {heroPost.readingTime}
                    </span>
                    {heroPost.author && (
                      <span className="blog-hero-card__meta-item blog-hero-card__author">
                        {heroPost.author}
                      </span>
                    )}
                  </div>
                  <span className="blog-hero-card__cta">
                    Read Full Article <ArrowRight className="blog-hero-card__cta-arrow" />
                  </span>
                </div>
              </Link>
            )}

            <div className="blog-listing-grid">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {currentPage < totalPages && (
          <div className="blog-load-more">
            <button
              type="button"
              className="blog-load-more__button"
              onClick={() => setPage(currentPage + 1)}
              aria-label="Load more articles"
            >
              Load more articles
            </button>
          </div>
        )}
      </section>
    </>
  );
}
