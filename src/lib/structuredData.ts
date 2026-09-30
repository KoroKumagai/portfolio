import type { Graph, Person, WebSite } from "schema-dts";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { profileLinks, siteUrl } from "./site";

// 各ページの JSON-LD からは @id で参照する（Person の定義はここだけに置く）
export const personId = new URL("/#person", siteUrl).href;
export const websiteId = new URL("/#website", siteUrl).href;

// サイト共通の WebSite と Person。ルートレイアウトで全ページに出力する
export function buildSiteGraph(locale: Locale): Graph {
  const { profile } = getDictionary(locale);

  const person: Person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    jobTitle: profile.role,
    description: profile.catchphrase,
    url: siteUrl.href,
    sameAs: Object.values(profileLinks),
    // knowsAbout は Skills ページの実装時に、表示するスキルデータから生成する
  };

  const website: WebSite = {
    "@type": "WebSite",
    "@id": websiteId,
    name: profile.name,
    description: profile.catchphrase,
    url: siteUrl.href,
    inLanguage: locale,
    author: { "@id": personId },
  };

  return { "@context": "https://schema.org", "@graph": [website, person] };
}
