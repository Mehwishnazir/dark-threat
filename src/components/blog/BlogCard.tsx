import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  publishDate: string;
  readingTime: string;
  author?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-threat hover:border-primary/30">
      {/* Featured Image */}
      <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-oswald font-semibold uppercase tracking-wider rounded">
          {post.category}
        </span>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-oswald font-bold text-foreground mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-primary">
            {post.title}
          </h2>
        </Link>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Meta Row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
