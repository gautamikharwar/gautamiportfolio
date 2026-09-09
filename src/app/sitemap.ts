import type { MetadataRoute } from "next";
import { posts, profile } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/blog"].map((path) => ({
    url: `${profile.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
