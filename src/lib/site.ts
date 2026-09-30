// metadataBase・canonical・sitemap・OGP・JSON-LD の基準URL（単一の情報源）
// 静的ファイルの app/robots.txt（Sitemap:）には直書きしているため、変更時はあわせて更新する
export const siteUrl = new URL("https://bbbb.dev");

// スキップリンクの遷移先。<main> はルートレイアウトにのみ置く
export const mainContentId = "main-content";
