import { Navigate, useParams } from 'react-router-dom';
import BlogPost from '@/pages/BlogPost';
import { BLOG_SLUG_REDIRECTS } from '@/blogSlugRedirects';

/**
 * Intercepts /blog/:slug — redirects broken Related Resources slugs to
 * registered posts, otherwise renders BlogPost as usual.
 */
export default function BlogSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const target = slug ? BLOG_SLUG_REDIRECTS[slug] : undefined;

  if (target) {
    return <Navigate to={`/blog/${target}`} replace />;
  }

  return <BlogPost />;
}
