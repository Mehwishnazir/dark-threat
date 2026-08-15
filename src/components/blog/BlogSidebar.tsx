import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import type { BlogPost } from './BlogCard';

interface BlogSidebarProps {
  categories: { name: string; count: number }[];
  recentPosts: BlogPost[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  isSticky?: boolean;
}

const BlogSidebar = ({
  categories,
  recentPosts,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
}: BlogSidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-montserrat font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
          Search
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background border-border focus:border-primary"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-montserrat font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={`w-full flex items-center justify-between py-2 px-3 rounded transition-colors text-sm ${
                selectedCategory === null
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <span>All Posts</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <button
                onClick={() => onCategorySelect(category.name)}
                className={`w-full flex items-center justify-between py-2 px-3 rounded transition-colors text-sm ${
                  selectedCategory === category.name
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span>{category.name}</span>
                <span className="flex items-center gap-2">
                  <span className="text-xs opacity-60">({category.count})</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-montserrat font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.slice(0, 4).map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex gap-3"
              >
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  width="64"
                  height="64"
                  className="w-16 h-16 object-cover rounded flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {post.publishDate}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
