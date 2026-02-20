"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className="opacity-80 hover:opacity-100 transition-opacity"
    >
      <span
        className={[
          "underline underline-offset-4 transition-[text-decoration-color]",
          isActive ? "decoration-current" : "decoration-transparent",
        ].join(" ")}
      >
        {children}
      </span>
    </Link>
  );
}
