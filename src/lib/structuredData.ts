import type {
  BreadcrumbList,
  Graph,
  Person,
  ProfilePage,
  WebSite,
  WithContext,
} from "schema-dts";
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
    alternateName: profile.nameJa,
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

type BreadcrumbItem = { name: string; path: string };

// 下層ページのパンくず。先頭のホームは共通で付与し、呼び出し側は自ページまでを渡す
export function buildBreadcrumbList(
  locale: Locale,
  items: BreadcrumbItem[],
): WithContext<BreadcrumbList> {
  const trail = [
    { name: getDictionary(locale).breadcrumb.home, path: "/" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, siteUrl).href,
    })),
  };
}

// About ページ。人物の情報はサイト共通の Person を @id で参照し、定義を重複させない
export function buildProfilePage(
  locale: Locale,
  { name, path }: { name: string; path: string },
): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name,
    url: new URL(path, siteUrl).href,
    inLanguage: locale,
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  };
}
