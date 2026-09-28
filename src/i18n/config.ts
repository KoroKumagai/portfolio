export const locales = ["ja"] as const;

export type Locale = (typeof locales)[number];

// 初期リリースは日本語のみ。多言語化時は app/[lang]/ へ移行し、ここにロケールを追加する
export const defaultLocale: Locale = "ja";

// Open Graph は BCP 47 ではなく language_TERRITORY 形式を要求する
export const ogLocales: Record<Locale, string> = {
  ja: "ja_JP",
};
