import type { ReactNode } from "react";

export function InfoCard({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-surface-muted p-5">
      <div>
        <p className="text-xs text-faint">{label}</p>
        <p className="mt-1 font-medium">{title}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}
