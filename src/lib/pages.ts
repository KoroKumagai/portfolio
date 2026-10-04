// 公開中のページ（sitemap・canonical の単一の情報源）。
// lastModified は表示コンテンツを更新したときに手動で更新する（ビルド日時で一律に更新しない）
export const pages = {
  home: { path: "/", lastModified: "2026-09-28" },
  about: { path: "/about", lastModified: "2026-10-04" },
  // 本文を改定したら更新する（ページ上の「最終更新日」にも使う）
  privacy: { path: "/privacy", lastModified: "2026-10-04" },
} as const satisfies Record<string, { path: string; lastModified: string }>;
