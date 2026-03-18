import { useState, useMemo, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Linkedin, Twitter, Github, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import BlogCard, { type BlogPost } from '@/components/blog/BlogCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';
import { allBlogs } from '@/blogs';

const categories = [
  'All Blogs',
  'Threat Intelligence',
  'Security',
  'Research',
  'Best Practices',
  'Cybersecurity',
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-oswald font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-background to-threat-dark overflow-hidden">
        <AnimatedBackground />

        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full" />}>
            <ThreatSphere />
          </Suspense>
        </div>

        <div className="relative max-w-6xl mx-auto text-center mt-10 z-10">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-foreground mb-6">
            THREAT <span className="text-primary">INTELLIGENCE</span> BLOG
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights on dark web monitoring, cybersecurity trends, and threat intelligence strategies.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className="text-xs"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {paginatedPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                size="sm"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-oswald font-bold text-foreground">DARKTHREAT</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DarkThreat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
