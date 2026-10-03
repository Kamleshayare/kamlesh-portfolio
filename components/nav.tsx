"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";

const variantStyles = {
  light: {
    active: "bg-surface-muted text-foreground",
    inactive: "text-muted hover:text-foreground",
  },
  dark: {
    active: "bg-white/25 text-foreground-dark",
    inactive: "text-muted-dark hover:text-foreground-dark",
  },
} as const;

export function Nav({ variant = "light" }: { variant?: keyof typeof variantStyles }) {
  const pathname = usePathname();
  const theme = variantStyles[variant];

  return (
    <nav className="flex justify-center py-8">
      <ul className="flex items-center gap-1 px-2 py-1.5 text-sm">
        {navItems.map(({ label, href }) => {
          const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

          return (
            <li key={href}>
              <Link
                href={href}
                className={`block rounded-sm px-1 py-1.5 transition-colors ${
                  isActive ? theme.active : theme.inactive
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
