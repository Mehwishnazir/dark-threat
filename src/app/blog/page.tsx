import type { Metadata } from "next";
import { pageSeo } from "@/lib/metadata";
import BlogListingClient from "@/components/blog/BlogListingClient";
import JsonLd from "@/components/JsonLd";
import ThreatSphere from "@/components/ThreatSphereDynamic";
import { getBlogPostCount, getBlogPostMetaList } from "@/lib/blog/data";

export const metadata: Metadata = {
  title: "Threat Intelligence Blog",
  description:
    "Expert insights on dark web monitoring, credential leak detection, and threat intelligence strategies from the DarkThreat research team.",
  ...pageSeo("/blog"),
};

export default function BlogIndexPage() {
  const posts = getBlogPostMetaList();
  const count = getBlogPostCount();

  return (
    <div className="blog-listing-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Threat Intelligence Blog",
          description:
            "Expert insights on dark web monitoring, cybersecurity trends, and threat intelligence strategies.",
          url: "https://darkthreat.ai/blog",
          isPartOf: {
            "@type": "WebSite",
            name: "DarkThreat",
            url: "https://darkthreat.ai",
          },
        }}
      />

      <section className="blog-listing-hero pt-8">
        <div className="blog-listing-hero__sphere">
          <ThreatSphere />
        </div>
        <div className="blog-listing-hero__content">
          <div className="blog-listing-hero__eyebrow">DarkThreat Research</div>
          <h1 className="blog-listing-hero__title">
            THREAT <span>INTELLIGENCE</span> BLOG
          </h1>
          <p className="blog-listing-hero__subtitle">
            Expert insights on dark web monitoring, cybersecurity trends, and threat intelligence strategies.
          </p>
          <div className="blog-listing-hero__stats">
            <div className="blog-listing-hero__stat">
              <span className="blog-listing-hero__stat-number">{count}</span>
              <span className="blog-listing-hero__stat-label">Articles</span>
            </div>
            <div className="blog-listing-hero__stat-divider" />
            <div className="blog-listing-hero__stat">
              <span className="blog-listing-hero__stat-number">2</span>
              <span className="blog-listing-hero__stat-label">Categories</span>
            </div>
          </div>
        </div>
      </section>

      <BlogListingClient posts={posts} />
    </div>
  );
}
