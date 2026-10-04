import { NavLink } from "@/components/NavLink";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { pages } from "@/lib/pages";

type SiteHeaderProps = {
  locale: Locale;
};

// 単独で置くリンクのため、WCAG 2.2 のターゲットサイズ（24×24 CSS px）を満たす高さを確保する
const linkClassName = "inline-flex min-h-6 items-center";

// 固定（sticky）にしない。フォーカスした要素がヘッダーに隠れないようにするため（WCAG 2.4.11）
export function SiteHeader({ locale }: SiteHeaderProps) {
  const { profile, about } = getDictionary(locale);
  // Works・Skills などはページの公開時に追加する
  const navItems = [{ href: pages.about.path, label: about.title }];

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <NavLink
          href={pages.home.path}
          className={`${linkClassName} font-bold tracking-tight`}
        >
          {profile.name}
        </NavLink>
        <nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <NavLink
                  href={href}
                  className={`${linkClassName} underline-offset-4 hover:underline aria-[current=page]:underline`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
