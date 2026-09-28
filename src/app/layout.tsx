import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { formatTitle, getSiteTitle } from "@/lib/metadata";
import { mainContentId, siteUrl } from "@/lib/site";
import "./globals.css";

// 日本語グリフは unicode-range で必要な分だけ読み込まれるため、preload 対象は latin のみ
const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: getSiteTitle(defaultLocale),
    template: formatTitle("%s", defaultLocale),
  },
  description: dict.profile.catchphrase,
  // creator は X アカウント確定後に設定する
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      className={`${notoSansJp.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href={`#${mainContentId}`}
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-background focus:px-4 focus:py-2 focus:outline-2 focus:outline-foreground"
        >
          {dict.a11y.skipToContent}
        </a>
        <main id={mainContentId} className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
