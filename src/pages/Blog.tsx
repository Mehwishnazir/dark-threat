import { useState, useMemo, Suspense } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Linkedin, Twitter, Github, Search, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard, { type BlogPost } from '@/components/blog/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import { allBlogs } from '@/blogs';
import './blog.css';

const categories = [
  'All Blogs',
  'Threat Intelligence',
  'Security',
  'Research',
  'Best Practices',
  'Cybersecurity',
];

const POSTS_PER_PAGE = 12;

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);

  const setPage = (next: number) => {
    const params = new URLSearchParams(searchParams);
    if (next <= 1) params.delete('page');
    else params.set('page', String(next));
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPosts = useMemo(() => {
    return allBlogs.filter((post: BlogPost) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Blogs' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Hero post is the first post on page 1 when no search is active
  const showHero = currentPage === 1 && searchQuery === '';
  const heroPost = showHero ? paginatedPosts[0] : null;
  const gridPosts = showHero ? paginatedPosts.slice(1) : paginatedPosts;

  // Build numbered pagination
  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  // Count posts per category for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Blogs': allBlogs.length };
    allBlogs.forEach((post: BlogPost) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="blog-listing-page">
      <Helmet>
        <title>Threat Intelligence Blog | DarkThreat.ai</title>
        <meta name="description" content="Expert insights on dark web monitoring, credential leak detection, and threat intelligence strategies from the DarkThreat research team." />
        <link rel="canonical" href="https://darkthreat.ai/blog" />
      </Helmet>

      {/* HEADER */}
      <header className="blog-listing-header">
        <div className="blog-listing-header__inner">
          <Link to="/" className="blog-listing-header__logo">
            DARK<span>THREAT</span>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="blog-listing-hero">
        <AnimatedBackground />
        <div className="blog-listing-hero__sphere">
          <Suspense fallback={<div className="blog-listing-hero__sphere-fallback" />}>
            <ThreatSphere />
          </Suspense>
        </div>
        <div className="blog-listing-hero__content">
          <div className="blog-listing-hero__eyebrow">DarkThreat Research</div>
          <h1 className="blog-listing-hero__title">
            THREAT <span>INTELLIGENCE</span> BLOG
          </h1>
          <p className="blog-listing-hero__subtitle">
            Expert insights on dark web monitoring, cybersecurity trends, and threat intelligence strategies.
          </p>
          <div className="blog-listing-hero__stats">
            <div className="blog-listing-hero__stat">
              <span className="blog-listing-hero__stat-number">{allBlogs.length}</span>
              <span className="blog-listing-hero__stat-label">Articles</span>
            </div>
            <div className="blog-listing-hero__stat-divider" />
            <div className="blog-listing-hero__stat">
              <span className="blog-listing-hero__stat-number">{categories.length - 1}</span>
              <span className="blog-listing-hero__stat-label">Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="blog-listing-filters">
        <div className="blog-listing-filters__inner">
          <div className="blog-listing-filters__search">
            <Search className="blog-listing-filters__search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="blog-listing-filters__search-input"
            />
          </div>

          <div className="blog-listing-filters__cats">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(1);
                }}
                className={`blog-listing-filters__cat-btn ${selectedCategory === cat ? 'blog-listing-filters__cat-btn--active' : ''}`}
              >
                {cat}
                {categoryCounts[cat] != null && (
                  <span className="blog-listing-filters__cat-count">{categoryCounts[cat]}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="blog-listing-content">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

        {/* Results info bar */}
        <div className="blog-listing-results-bar">
          <span>
            Showing <strong>{(currentPage - 1) * POSTS_PER_PAGE + 1}</strong>–<strong>{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)}</strong> of <strong>{filteredPosts.length}</strong> articles
          </span>
          {searchQuery && (
            <span className="blog-listing-results-bar__query">
              for "<em>{searchQuery}</em>"
            </span>
          )}
        </div>

        {paginatedPosts.length === 0 ? (
          <div className="blog-listing-empty">
            <p>No articles found matching your criteria.</p>
          </div>
        ) : (
          <>
            {/* HERO FEATURED POST */}
            {heroPost && (
              <Link to={`/blog/${heroPost.slug}`} className="blog-hero-card">
                <div className="blog-hero-card__image-wrap">
                  <img
                    src={heroPost.featuredImage}
                    alt={heroPost.title}
                    className="blog-hero-card__image"
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

            {/* GRID */}
            <div className="blog-listing-grid">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {/* NUMBERED PAGINATION */}
        {totalPages > 1 && (
          <nav className="blog-pagination" aria-label="Blog pagination">
            <button
              className="blog-pagination__arrow"
              onClick={() => setPage(currentPage - 1)}
              disabled={currentPage <= 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="blog-pagination__arrow-icon" />
            </button>

            {getPageNumbers().map((p, i) =>
              p === '...' ? (
                <span key={`ellipsis-${i}`} className="blog-pagination__ellipsis">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`blog-pagination__page ${currentPage === p ? 'blog-pagination__page--active' : ''}`}
                >
                  {p}
                </button>
              )
            )}

            <button
              className="blog-pagination__arrow"
              onClick={() => setPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="blog-pagination__arrow-icon" />
            </button>
          </nav>
        )}
      </section>

      {/* FOOTER */}
      <footer className="blog-listing-footer">
        <div className="blog-listing-footer__inner">
          <div className="blog-listing-footer__brand">
            <Shield className="blog-listing-footer__shield" />
            <span className="blog-listing-footer__name">DARKTHREAT</span>
          </div>

          <div className="blog-listing-footer__socials">
            <a href="https://linkedin.com/company/darkthreat" target="_blank" rel="noopener noreferrer">
              <Linkedin className="blog-listing-footer__social-icon" />
            </a>
            <a href="https://twitter.com/DarkThreatAI" target="_blank" rel="noopener noreferrer">
              <Twitter className="blog-listing-footer__social-icon" />
            </a>
            <a href="https://github.com/darkthreat" target="_blank" rel="noopener noreferrer">
              <Github className="blog-listing-footer__social-icon" />
            </a>
          </div>

          <p className="blog-listing-footer__copy">
            © {new Date().getFullYear()} DarkThreat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
