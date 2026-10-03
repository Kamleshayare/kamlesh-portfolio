import type { ReactNode } from "react";

export function Container({
  children,
  wide = false,
  className = "",
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-6 ${wide ? "max-w-5xl" : "max-w-3xl"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`py-12 md:py-16 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-wide text-faint">
      {children}
    </p>
  );
}

export function DottedDivider({ className = "" }: { className?: string }) {
  return <div className={`border-t border-dotted border-border ${className}`} />;
}
