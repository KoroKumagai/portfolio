"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type NavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

// 現在のページを支援技術に伝えるため aria-current を付ける。
// 現在のパスはクライアントでしか分からないため、この末端だけをクライアントコンポーネントにする
export function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      {...props}
    />
  );
}
