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

export type FullBlogPost = BlogPost & {
  content: string;
  tableOfContents?: { id: string; title: string }[];
  metaTitle?: string;
  metaDescription?: string;
};

/** Listing / card metadata only — never includes HTML body. */
export type BlogPostMeta = BlogPost;
