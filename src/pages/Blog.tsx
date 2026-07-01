import { useState, useMemo, Suspense } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Linkedin, Twitter, Github, Search, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard, { type BlogPost } from '@/components/blog/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import AppHeader from '@/components/AppHeader';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { allBlogs } from '@/blogs';
import './blog.css';

const FALLBACK_IMAGE = '/dark-threat-1.webp';


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

  const blogCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Threat Intelligence Blog',
    description: 'Expert insights on dark web monitoring, cybersecurity trends, and threat intelligence strategies.',
    url: 'https://darkthreat.ai/blog',
    isPartOf: {
      '@type': 'WebSite',
      name: 'DarkThreat',
      url: 'https://darkthreat.ai'
    }
  };

  const setPage = (next: number, scroll = true) => {
    const params = new URLSearchParams(searchParams);
    if (next <= 1) params.delete('page');
    else params.set('page', String(next));
    setSearchParams(params);
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredPosts = useMemo(() => {
    const posts = allBlogs.filter((post: BlogPost) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All Blogs' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return posts
      .slice()
      .sort((a, b) => {
        const aTimestamp = Date.parse(a.publishDate) || 0;
        const bTimestamp = Date.parse(b.publishDate) || 0;
        return bTimestamp - aTimestamp;
      });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const loadedCount = Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(0, currentPage * POSTS_PER_PAGE);

  // Hero post is the first post on page 1 when no search is active
  const showHero = currentPage === 1 && searchQuery === '';
  const heroPost = showHero ? paginatedPosts[0] : null;
  const gridPosts = showHero ? paginatedPosts.slice(1) : paginatedPosts;

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
        <script type="application/ld+json">{JSON.stringify(blogCollectionSchema)}</script>
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
                setPage(1);
              }}
              className="blog-listing-filters__search-input"
              aria-label="Search blog articles"
            />
          </div>

          <div className="blog-listing-filters__dropdown">
            <label htmlFor="category-select" className="blog-listing-filters__dropdown-label">
              Filter by Category:
            </label>
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setPage(1);
            }}>
              <SelectTrigger id="category-select" className="blog-listing-filters__select-trigger">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="blog-listing-filters__select-content">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="blog-listing-filters__select-item">
                    <span>{cat}</span>
                    {categoryCounts[cat] != null && (
                      <span className="blog-listing-filters__select-count">({categoryCounts[cat]})</span>
                    )}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="blog-listing-content">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

        {/* Results info bar */}
        <div className="blog-listing-focus-line">
          Important and recent articles are shown first.
        </div>
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
                    width="1200"
                    height="675"
                    decoding="async"
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

        {currentPage < totalPages && (
          <div className="blog-load-more">
            <button
              type="button"
              className="blog-load-more__button"
              onClick={() => setPage(currentPage + 1, false)}
              aria-label="Load more articles"
            >
              Load more articles
            </button>
          </div>
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
