import type { MetadataRoute } from "next";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { getSiteTitle } from "@/lib/metadata";

// 静的エクスポート（output: "export"）ではビルド時生成を明示する必要がある
export const dynamic = "force-static";

// 起動時のスプラッシュ等の背景色。既定テーマ（ダーク）の --background（globals.css）と一致させる
const backgroundColor = "#0a0a0a";

export default function manifest(): MetadataRoute.Manifest {
  const { profile } = getDictionary(defaultLocale);

  return {
    name: getSiteTitle(defaultLocale),
    short_name: profile.name,
    description: profile.catchphrase,
    lang: defaultLocale,
    start_url: "/",
    background_color: backgroundColor,
    theme_color: backgroundColor,
    // 画像は public/ に置く（ホーム画面追加・インストール時のアイコン）
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
