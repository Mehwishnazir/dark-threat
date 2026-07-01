import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Twitter, Linkedin, Shield } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import AppHeader from '@/components/AppHeader';
import { allBlogs } from '@/blogs';


interface Author {
  slug: string;
  name: string;
  initials: string;
  jobTitle: string;
  bio: string;
  expertise: string[];
  twitter?: string;
  linkedin?: string;
}

const AUTHORS: Record<string, Author> = {
  'dr-ayaan-rahman': {
    slug: 'dr-ayaan-rahman',
    name: 'Dr. Ayaan Rahman',
    initials: 'D.A',
    jobTitle: 'Chief Threat Intelligence Researcher',
    bio: 'Dr. Ayaan Rahman is a cybersecurity expert with 10+ years of experience in dark web monitoring, threat intelligence, and breach detection. He has advised Fortune 500 security teams and published research on hidden marketplaces, credential abuse, and predictive threat analytics.',
    expertise: ['Dark Web Monitoring', 'Threat Intelligence', 'Cybersecurity', 'Credential Leak Detection', 'Incident Response'],
    twitter: 'https://twitter.com/DarkThreatAI',
    linkedin: 'https://linkedin.com/company/darkthreat',
  },
};

const AuthorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? AUTHORS[slug] : undefined;

  if (!author) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const authorPosts = allBlogs.filter(
    (p) => (p.author || '').toLowerCase() === author.name.toLowerCase()
  );
  const posts = authorPosts.length > 0 ? authorPosts : allBlogs.slice(0, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    url: `https://darkthreat.ai/author/${author.slug}`,
    sameAs: [author.twitter, author.linkedin].filter(Boolean),
    description: author.bio,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{author.name} | DarkThreat Author</title>
        <meta name="description" content={author.bio.slice(0, 155)} />
        <link rel="canonical" href={`https://darkthreat.ai/author/${author.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
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
                <a href={author.twitter} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {author.linkedin && (
                <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-montserrat font-bold mb-6">
            Articles by {author.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-montserrat font-bold">DarkThreat</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DarkThreat</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthorPage;
