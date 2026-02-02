import { useState, useMemo,Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Linkedin, Twitter, Github, ChevronLeft, ChevronRight, Search,AlertTriangle  } from 'lucide-react';
import BlogCard, { type BlogPost } from '@/components/blog/BlogCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import ThreatSphere from '@/components/ThreatSphere';

// Sample blog data - replace with CMS/API data
const samplePosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-dark-web-threats-2025',
    title: 'Understanding Dark Web Threats in 2025: What Every CISO Needs to Know',
    excerpt: 'The dark web landscape continues to evolve rapidly. Learn about the latest threat vectors and how to protect your organization from emerging cyber threats.',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    category: 'Threat Intelligence',
    publishDate: 'Jan 5, 2025',
    readingTime: '8 min read',
  },
  {
    id: '2',
    slug: 'credential-stuffing-attacks-prevention',
    title: 'Credential Stuffing Attacks: Detection and Prevention Strategies',
    excerpt: 'Credential stuffing remains one of the most prevalent attack vectors. Discover how dark web monitoring can help identify compromised credentials before attackers do.',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    category: 'Security',
    publishDate: 'Jan 3, 2025',
    readingTime: '6 min read',
  },
  {
    id: '3',
    slug: 'ransomware-ecosystem-analysis',
    title: 'Inside the Ransomware Ecosystem: A Deep Dive into Dark Web Markets',
    excerpt: 'Ransomware-as-a-Service has transformed the cybercrime landscape. We analyze the underground economy powering modern ransomware operations.',
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    category: 'Research',
    publishDate: 'Dec 28, 2024',
    readingTime: '12 min read',
  },
  {
    id: '4',
    slug: 'data-breach-response-playbook',
    title: 'The Complete Data Breach Response Playbook for Security Teams',
    excerpt: 'When a breach occurs, every minute counts. This comprehensive guide outlines the critical steps your team should take in the first 72 hours.',
    featuredImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80',
    category: 'Best Practices',
    publishDate: 'Dec 20, 2024',
    readingTime: '10 min read',
  },
  {
    id: '5',
    slug: 'api-security-dark-web-exposure',
    title: 'API Security: How Exposed Endpoints End Up on the Dark Web',
    excerpt: 'APIs are the backbone of modern applications, but misconfigured endpoints are increasingly targeted. Learn how to identify and secure vulnerable APIs.',
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    category: 'Security',
    publishDate: 'Dec 15, 2024',
    readingTime: '7 min read',
  },
  {
    id: '6',
    slug: 'threat-actor-profiling-guide',
    title: 'Threat Actor Profiling: Understanding Your Adversaries',
    excerpt: 'Knowing your enemy is half the battle. This guide explains how to profile threat actors and anticipate their tactics, techniques, and procedures.',
    featuredImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Threat Intelligence',
    publishDate: 'Dec 10, 2024',
    readingTime: '9 min read',
  },
  {
    id: '7',
    slug: 'threat-actor-profiling-guide',
    title: 'Threat Actor Profiling: Understanding Your Adversaries',
    excerpt: 'Knowing your enemy is half the battle. This guide explains how to profile threat actors and anticipate their tactics, techniques, and procedures.',
    featuredImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Threat Intelligence',
    publishDate: 'Dec 10, 2024',
    readingTime: '9 min read',
  },
];

const categories = [
  'All Blogs',
  'Threat Intelligence',
  'Security',
  'Research',
  'Best Practices',
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return samplePosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All Blogs' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination
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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 py-6 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-oswald font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/solution" className="text-muted-foreground hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-primary">
              Blog
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button
              onClick={() => (window.location.href = '/auth')}
              className="hero-button"
            >
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-background to-threat-dark overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={<div className="w-full h-full bg-gradient-glow"></div>}>
            <ThreatSphere />
          </Suspense>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center mt-10 z-10">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-foreground mb-6">
            DARK<span className="glow-text">THREAT</span> BLOG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights, research, and best practices from the frontlines of dark web threat intelligence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full h-14 pl-6 pr-14 text-base bg-card border-primary/20 focus:border-primary rounded-full"
              />
              <Button
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`rounded-full px-6 py-2 transition-all ${selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border-primary/20 hover:border-primary hover:bg-primary/10'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Info */}
          <div className="mb-12 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-primary mb-2">
                  {filteredPosts.length}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  TOTAL BLOGS
                </div>
              </div>

              <div className="text-center">
                <div className="text-lg text-foreground mb-1">
                  Showing <span className="font-semibold text-primary">
                    {filteredPosts.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1}-{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)}
                  </span> of <span className="font-semibold">{filteredPosts.length}</span>
                </div>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <div className="text-lg font-semibold text-foreground">
                    {currentPage} / {totalPages}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Blog Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Blogs');
                }}
                className="hero-button"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-card border-t border-border py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-oswald font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-oswald font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-oswald font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/platform-terms" className="text-muted-foreground hover:text-primary">Platform Terms of Use</Link></li>
                <li><Link to="/website-terms" className="text-muted-foreground hover:text-primary">Website Terms of Use</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
