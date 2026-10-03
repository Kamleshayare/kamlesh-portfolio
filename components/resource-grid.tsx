"use client";

import { useMemo, useState } from "react";
import type { ResourceItem } from "@/lib/resources";
import { ResourceCard } from "@/components/resource-card";

export function ResourceGrid({ resources }: { resources: ResourceItem[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of resources) {
      for (const tag of r.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [resources]);

  const visibleItems = useMemo(
    () =>
      activeTag ? resources.filter((r) => r.tags.includes(activeTag)) : resources,
    [resources, activeTag],
  );

  return (
    <div>
      {tagCounts.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === null
                ? "border-foreground text-foreground"
                : "border-border text-faint hover:text-muted"
            }`}
          >
            All
          </button>
          {tagCounts.map(([tag, count]) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "border-foreground text-foreground"
                  : "border-border text-faint hover:text-muted"
              }`}
            >
              {tag}
              <span className="ml-1 opacity-60">{count}</span>
            </button>
          ))}
        </div>
      ) : null}

      {visibleItems.length > 0 ? (
        <div
          className="mt-10 grid gap-x-6 gap-y-10"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {visibleItems.map((resource) => (
            <ResourceCard key={resource.url} resource={resource} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-faint">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
