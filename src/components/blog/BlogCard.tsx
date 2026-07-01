import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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

const FALLBACK_IMAGE = '/dark-threat-1.webp';

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="blog-card">
      {/* Featured Image */}
      <Link to={`/blog/${post.slug}`} className="blog-card__image-wrap">
        <img
          src={post.featuredImage}
          alt={post.title}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src.indexOf(FALLBACK_IMAGE) === -1) img.src = FALLBACK_IMAGE;
          }}
          className="blog-card__image"
        />

        {/* Category Badge */}
        <span className="blog-card__category">{post.category}</span>
        {/* Hover overlay */}
        <div className="blog-card__overlay">
          <span className="blog-card__read-cta">
            Read Article <ArrowRight className="blog-card__arrow" />
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="blog-card__body">
        <Link to={`/blog/${post.slug}`} className="blog-card__title-link">
          <h2 className="blog-card__title">{post.title}</h2>
        </Link>

        <p className="blog-card__excerpt">{post.excerpt}</p>

        {/* Meta Row */}
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
};

export default BlogCard;
