/** Placeholder webps that exist in nextjs-app/public. */
export const BLOG_IMAGE_FALLBACKS = [
  "/dark-threat-1.webp",
  "/dark-threat-2.webp",
  "/dark-threat-3.webp",
  "/dark-threat-4.webp",
  "/dark-threat-5.webp",
  "/dark-threat-6.webp",
] as const;

/** Stable pick so the same post always gets the same placeholder. */
export function pickBlogImageFallback(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return BLOG_IMAGE_FALLBACKS[hash % BLOG_IMAGE_FALLBACKS.length];
}

/**
 * Resolve a blog featured image URL.
 * Local `/images/blog/*.jpg` assets are missing from the repo — map them
 * (and empty values) to cycling `/dark-threat-N.webp` placeholders.
 * Absolute http(s) URLs are left unchanged.
 */
export function resolveFeaturedImage(
  src: string | undefined | null,
  seed = ""
): string {
  const key = seed || src || "blog";
  if (!src || !src.trim()) {
    return pickBlogImageFallback(key);
  }
  if (/^https?:\/\//i.test(src)) {
    return src;
  }
  if (src.startsWith("/images/blog/")) {
    return pickBlogImageFallback(key);
  }
  return src;
}
