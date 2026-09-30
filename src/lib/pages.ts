// 公開中のページ（sitemap・canonical の単一の情報源）。
// lastModified は表示コンテンツを更新したときに手動で更新する（ビルド日時で一律に更新しない）
export const pages = {
  home: { path: "/", lastModified: "2026-09-28" },
} as const satisfies Record<string, { path: string; lastModified: string }>;
