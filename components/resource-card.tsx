import type { ResourceItem } from "@/lib/resources";

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-sm bg-surface-muted">
        {resource.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resource.cover}
            alt=""
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
          />
        ) : (
          <span className="px-4 text-center text-xs text-faint">Product</span>
        )}
      </div>

      <div className="mt-3 text-center">
        <p className="text-sm font-medium leading-snug text-foreground underline decoration-dotted decoration-transparent underline-offset-4 group-hover:decoration-current">
          {resource.title}
        </p>
        {resource.author || resource.meta ? (
          <p className="mt-1 text-xs text-muted">
            {[resource.author, resource.meta].filter(Boolean).join(" · ")}
          </p>
        ) : null}
      </div>
    </a>
  );
}
