import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { pages } from "@/lib/pages";
import { sourceRepositoryUrl } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
};

// 単独で置くリンクのため、WCAG 2.2 のターゲットサイズ（24×24 CSS px）を満たす高さを確保する
const linkClassName =
  "inline-flex min-h-6 items-center underline underline-offset-4 hover:no-underline";

export function SiteFooter({ locale }: SiteFooterProps) {
  const { footer, privacy } = getDictionary(locale);

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {footer.builtWith} ·{" "}
          {/* TODO: Works ページの実装後、本サイトの実績（設計判断の説明）へのリンクに差し替える */}
          <a href={sourceRepositoryUrl} className={linkClassName}>
            {footer.source}
          </a>
        </p>
        <Link href={pages.privacy.path} className={linkClassName}>
          {privacy.title}
        </Link>
      </div>
    </footer>
  );
}
