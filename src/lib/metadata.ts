import type { Metadata } from "next";
import { ogLocales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export function formatTitle(pageTitle: string, locale: Locale): string {
  return `${pageTitle} | ${getDictionary(locale).profile.name}`;
}

// TOP はテンプレートを通さず「名前 | 肩書き」を正式なサイトタイトルとする
export function getSiteTitle(locale: Locale): string {
  const { profile } = getDictionary(locale);
  return `${profile.name} | ${profile.role}`;
}

type PageMetadataInput = {
  locale: Locale;
  // string はルートレイアウトの title.template を通す。absolute はそのまま使う
  title: string | { absolute: string };
  description: string;
  path: string;
  type?: "website" | "profile";
};

// openGraph はセグメント間でシャローマージ（上書き）されるため、
// 共通項目（siteName・locale 等）を含めてページごとに毎回組み立てる
export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const resolvedTitle =
    typeof title === "string" ? formatTitle(title, locale) : title.absolute;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      siteName: getDictionary(locale).profile.name,
      locale: ogLocales[locale],
      type,
    },
  };
}
