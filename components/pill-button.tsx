import Link from "next/link";
import type { ReactNode } from "react";

export function PillButton({
  href,
  children,
  dark = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    dark
      ? "bg-white/10 text-foreground-dark hover:bg-white/15"
      : "bg-surface-muted text-foreground hover:bg-border"
  }`;

  const content = (
    <>
      <span className="h-1.5 w-1.5 rounded-sm bg-accent" />
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
