// metadataBase・canonical・sitemap・OGP・JSON-LD の基準URL（単一の情報源）
// 静的ファイルの app/robots.txt（Sitemap:）には直書きしているため、変更時はあわせて更新する
export const siteUrl = new URL("https://bbbb.dev");

// スキップリンクの遷移先。<main> はルートレイアウトにのみ置く
export const mainContentId = "main-content";

// 外部プロフィール（JSON-LD の sameAs・Contact のリンク）。LinkedIn / X はアカウント確定後に追加する
export const profileLinks = {
  github: "https://github.com/KoroKumagai",
} as const;

// 問い合わせ先（Contact・Privacy Policy）
export const contactEmail = "koro.kumagai@bbbb.dev";
