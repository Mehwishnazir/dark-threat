import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Shield, Linkedin, Twitter, Github, Calendar, Clock, User, ChevronLeft, Share2, Link as LinkIcon, ArrowUp } from 'lucide-react';
import BlogCard, { type BlogPost as BlogPostType } from '@/components/blog/BlogCard';

// Sample blog data - replace with CMS/API data
const samplePosts: BlogPostType[] = [
  {
    id: '1',
    slug: 'understanding-dark-web-threats-2025',
    title: 'Understanding Dark Web Threats in 2025: What Every CISO Needs to Know',
    excerpt: 'The dark web landscape continues to evolve rapidly. Learn about the latest threat vectors and how to protect your organization from emerging cyber threats.',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    category: 'Threat Intelligence',
    publishDate: 'Jan 5, 2025',
    readingTime: '8 min read',
    author: 'Sarah Chen',
  },
  {
    id: '2',
    slug: 'credential-stuffing-attacks-prevention',
    title: 'Credential Stuffing Attacks: Detection and Prevention Strategies',
    excerpt: 'Credential stuffing remains one of the most prevalent attack vectors. Discover how dark web monitoring can help identify compromised credentials before attackers do.',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    category: 'Security',
    publishDate: 'Jan 3, 2025',
    readingTime: '6 min read',
    author: 'Marcus Johnson',
  },
  {
    id: '3',
    slug: 'ransomware-ecosystem-analysis',
    title: 'Inside the Ransomware Ecosystem: A Deep Dive into Dark Web Markets',
    excerpt: 'Ransomware-as-a-Service has transformed the cybercrime landscape. We analyze the underground economy powering modern ransomware operations.',
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80',
    category: 'Research',
    publishDate: 'Dec 28, 2024',
    readingTime: '12 min read',
    author: 'Dr. Alex Rivera',
  },
  {
    id: '4',
    slug: 'data-breach-response-playbook',
    title: 'The Complete Data Breach Response Playbook for Security Teams',
    excerpt: 'When a breach occurs, every minute counts. This comprehensive guide outlines the critical steps your team should take in the first 72 hours.',
    featuredImage: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80',
    category: 'Best Practices',
    publishDate: 'Dec 20, 2024',
    readingTime: '10 min read',
    author: 'Emily Watson',
  },
  {
    id: '5',
    slug: 'api-security-dark-web-exposure',
    title: 'API Security: How Exposed Endpoints End Up on the Dark Web',
    excerpt: 'APIs are the backbone of modern applications, but misconfigured endpoints are increasingly targeted. Learn how to identify and secure vulnerable APIs.',
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    category: 'Security',
    publishDate: 'Dec 15, 2024',
    readingTime: '7 min read',
    author: 'James Park',
  },
  {
    id: '6',
    slug: 'threat-actor-profiling-guide',
    title: 'Threat Actor Profiling: Understanding Your Adversaries',
    excerpt: 'Knowing your enemy is half the battle. This guide explains how to profile threat actors and anticipate their tactics, techniques, and procedures.',
    featuredImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    category: 'Threat Intelligence',
    publishDate: 'Dec 10, 2024',
    readingTime: '9 min read',
    author: 'Sarah Chen',
  },
];

// Sample full post content
const getPostContent = (slug: string) => {
  const contentMap: Record<string, { content: string; tableOfContents: { id: string; title: string }[] }> = {
    'understanding-dark-web-threats-2025': {
      tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'evolving-landscape', title: 'The Evolving Landscape' },
        { id: 'key-threats', title: 'Key Threats in 2025' },
        { id: 'protection-strategies', title: 'Protection Strategies' },
        { id: 'conclusion', title: 'Conclusion' },
      ],
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>The dark web has evolved significantly over the past decade, transforming from a niche corner of the internet into a sophisticated marketplace for cybercriminals. As we enter 2025, the threats emanating from these hidden networks have become more complex, more targeted, and more dangerous than ever before.</p>
        
        <p>For Chief Information Security Officers (CISOs) and security leaders, understanding these threats is no longer optional—it's a fundamental requirement for protecting organizational assets and maintaining stakeholder trust.</p>

        <blockquote>
          <p>"The dark web is not just a marketplace—it's an ecosystem. Understanding its dynamics is crucial for modern cybersecurity defense."</p>
        </blockquote>

        <h2 id="evolving-landscape">The Evolving Landscape</h2>
        <p>The dark web ecosystem has matured considerably. What was once a fragmented collection of forums and marketplaces has consolidated into a more organized, professional criminal enterprise. Key developments include:</p>
        
        <ul>
          <li><strong>Ransomware-as-a-Service (RaaS):</strong> Professional affiliate programs that lower the barrier to entry for cybercriminals</li>
          <li><strong>Initial Access Brokers (IABs):</strong> Specialized actors who sell network access to the highest bidder</li>
          <li><strong>Data Broker Markets:</strong> Centralized exchanges for stolen credentials, financial data, and personal information</li>
          <li><strong>Automated Attack Services:</strong> DDoS-for-hire, phishing kits, and other turnkey attack solutions</li>
        </ul>

        <figure>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Cybersecurity monitoring dashboard" />
          <figcaption>Modern threat intelligence platforms provide real-time visibility into dark web activities</figcaption>
        </figure>

        <h2 id="key-threats">Key Threats in 2025</h2>
        <p>As organizations become more digitally connected, the attack surface continues to expand. The most significant threats we're tracking include:</p>

        <h3>1. AI-Enhanced Social Engineering</h3>
        <p>Threat actors are leveraging generative AI to create more convincing phishing campaigns, deepfake audio for vishing attacks, and sophisticated business email compromise (BEC) schemes.</p>

        <h3>2. Supply Chain Compromises</h3>
        <p>Attacks targeting software supply chains continue to proliferate, with threat actors seeking to compromise widely-used tools and libraries to gain access to downstream targets.</p>

        <pre><code># Example: Detecting anomalous supply chain activity
def analyze_dependency_changes(repo):
    changes = get_recent_commits(repo)
    for change in changes:
        if is_dependency_modification(change):
            risk_score = calculate_risk(change)
            if risk_score > THRESHOLD:
                alert_security_team(change, risk_score)</code></pre>

        <h3>3. Credential Harvesting at Scale</h3>
        <p>Info-stealer malware has become increasingly sophisticated, capturing not just passwords but session tokens, browser cookies, and cryptocurrency wallet data.</p>

        <h2 id="protection-strategies">Protection Strategies</h2>
        <p>Defending against dark web threats requires a multi-layered approach:</p>

        <ol>
          <li><strong>Continuous Monitoring:</strong> Implement dark web monitoring to detect when your organization's data appears in underground markets</li>
          <li><strong>Threat Intelligence Integration:</strong> Feed dark web intelligence into your security operations center (SOC) for proactive defense</li>
          <li><strong>Employee Awareness:</strong> Train staff to recognize social engineering attempts and report suspicious activity</li>
          <li><strong>Zero Trust Architecture:</strong> Assume breach and verify every access request, regardless of source</li>
          <li><strong>Incident Response Planning:</strong> Develop and regularly test response procedures for credential compromise scenarios</li>
        </ol>

        <h2 id="conclusion">Conclusion</h2>
        <p>The dark web threat landscape will continue to evolve, but so too will our ability to monitor, detect, and respond to these threats. By maintaining visibility into underground activities and implementing robust security controls, organizations can significantly reduce their risk exposure.</p>

        <p>The key is not to view dark web monitoring as a standalone solution, but as an integral component of a comprehensive threat intelligence program. When combined with strong technical controls and a security-aware culture, organizations can stay ahead of emerging threats and protect their most valuable assets.</p>
      `,
    },
  };

  return contentMap[slug] || {
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'main-content', title: 'Main Content' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>This article explores critical aspects of modern cybersecurity and dark web threat intelligence. As organizations face increasingly sophisticated attacks, understanding the threat landscape becomes essential for effective defense.</p>

      <p>Our team of security researchers continuously monitors underground forums, marketplaces, and communication channels to provide actionable intelligence to our clients.</p>

      <blockquote>
        <p>"Visibility into the dark web provides the early warning system that modern security teams need to stay ahead of threats."</p>
      </blockquote>

      <h2 id="main-content">Main Content</h2>
      <p>The threat landscape is constantly evolving, with new attack vectors and techniques emerging regularly. Key areas of focus include:</p>

      <ul>
        <li><strong>Threat Actor Tracking:</strong> Monitoring known threat groups and their evolving tactics</li>
        <li><strong>Credential Monitoring:</strong> Detecting compromised credentials before they're exploited</li>
        <li><strong>Brand Protection:</strong> Identifying impersonation attempts and fraudulent activities</li>
        <li><strong>Data Leak Detection:</strong> Finding exposed sensitive data on paste sites and forums</li>
      </ul>

      <figure>
        <img src="https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&q=80" alt="Cybersecurity team analyzing threats" />
        <figcaption>Security teams leverage threat intelligence to proactively defend against attacks</figcaption>
      </figure>

      <p>Implementing effective monitoring requires understanding both the technical and human elements of underground communities. Threat actors operate in sophisticated ecosystems with their own economies, reputations, and operational security practices.</p>

      <pre><code># Example: Monitoring for organization mentions
def monitor_dark_web(organization_name, domains):
    alerts = []
    for source in get_monitored_sources():
        mentions = search_source(source, organization_name)
        for mention in mentions:
            alert = create_alert(mention, source)
            alerts.append(alert)
    return prioritize_alerts(alerts)</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>Proactive threat intelligence and dark web monitoring are no longer optional for organizations seeking to protect their assets. By understanding the threat landscape and implementing appropriate monitoring capabilities, security teams can detect and respond to threats before they result in significant damage.</p>

      <p>The investment in visibility pays dividends through reduced breach risk, faster incident response, and more informed security decision-making.</p>
    `,
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = samplePosts.find((p) => p.slug === slug);
  const postContent = slug ? getPostContent(slug) : null;
  const relatedPosts = samplePosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title, url });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post || !postContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-oswald font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="hero-button">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author || 'DarkThreat Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DarkThreat',
      logo: {
        '@type': 'ImageObject',
        url: '/favicon.ico',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | DarkThreat Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://darkthreat.ai/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
        <section className="pt-28 pb-0">
          {/* Back to Blog */}
          <div className="max-w-4xl mx-auto px-6 mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Post Header */}
          <div className="max-w-4xl mx-auto px-6 text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-oswald font-semibold uppercase tracking-wider rounded mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{post.excerpt}</p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author || 'DarkThreat Team'}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.publishDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Article Content */}
              <article className="flex-1 max-w-3xl">
                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-oswald prose-headings:font-bold prose-headings:text-foreground prose-headings:uppercase prose-headings:tracking-wide
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:space-y-2
                    prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:space-y-2
                    prose-li:pl-2
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-card prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-blockquote:text-foreground prose-blockquote:font-medium
                    prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:my-8
                    prose-code:text-primary prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                    prose-figure:my-8
                    prose-img:rounded-lg prose-img:border prose-img:border-border
                    prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-3
                  "
                  dangerouslySetInnerHTML={{ __html: postContent.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-sm font-oswald font-semibold text-foreground uppercase tracking-wide">
                      Share this article
                    </span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleShare}
                        className="hover:border-primary hover:text-primary transition-colors"
                        aria-label="Share article"
                      >
                        {copied ? <LinkIcon className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                      </Button>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-md text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 border border-border rounded-md text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-28 space-y-8">
                  {/* Author Card */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-sm font-oswald font-semibold text-foreground uppercase tracking-wide mb-4">
                      Written By
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-oswald font-bold">
                        {(post.author || 'DT').charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{post.author || 'DarkThreat Team'}</p>
                        <p className="text-sm text-muted-foreground">Security Researcher</p>
                      </div>
                    </div>
                  </div>

                  {/* Table of Contents */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-sm font-oswald font-semibold text-foreground uppercase tracking-wide mb-4">
                      Table of Contents
                    </h3>
                    <nav>
                      <ul className="space-y-2">
                        {postContent.tableOfContents.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-card border border-primary/30 rounded-lg p-6">
                    <h3 className="text-lg font-oswald font-bold text-foreground mb-2">
                      Protect Your Organization
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get real-time dark web monitoring and threat intelligence.
                    </p>
                    <Link to="/auth">
                      <Button className="w-full hero-button text-sm py-3">
                        Start Free Trial
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        {/* Related Posts */}
        <section className="py-16 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-oswald font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/blog">
                <Button variant="outline" className="hero-button">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>

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

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-red transition-all duration-300 hover:shadow-red-intense z-50 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default BlogPost;
