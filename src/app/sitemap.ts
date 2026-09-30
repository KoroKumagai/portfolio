import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map(({ path, lastModified }) => ({
    url: new URL(path, siteUrl).href,
    lastModified,
  }));
}
