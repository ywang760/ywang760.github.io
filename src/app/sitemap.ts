import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://ywang760.github.io/", changeFrequency: "monthly", priority: 1 }];
}
