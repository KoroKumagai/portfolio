import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { siteUrl } from "@/lib/site";

// 静的エクスポート（output: "export"）ではビルド時生成を明示する必要がある
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map(({ path, lastModified }) => ({
    url: new URL(path, siteUrl).href,
    lastModified,
  }));
}
