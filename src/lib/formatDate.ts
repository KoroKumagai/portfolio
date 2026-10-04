import type { Locale } from "@/i18n/config";

// "YYYY-MM-DD" は UTC の 0 時として解釈されるため、UTC で整形してビルド環境のタイムゾーンによる日付ずれを防ぐ
export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}
