import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  dark = false,
  showYear = true,
}: {
  project: Project;
  dark?: boolean;
  showYear?: boolean;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
       style={{border:"1px solid whitesmoke"}}
      className="group relative flex aspect-4/3 flex-col overflow-hidden rounded-sm p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="relative z-10 flex items-start justify-between gap-3">
        {project.logo ? (
          <div className="relative h-8 w-8 shrink-0 transition-all duration-300">
            <Image
              src={project.logo}
              alt=""
              fill
              className="object-contain object-top-left"
              sizes="32px"
            />
          </div>
        ) : (
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-semibold ${
              dark ? "bg-white/10 text-foreground-dark" : "bg-white text-foreground"
            }`}
          >
            {project.name[0]}
          </span>
        )}

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide ${
            dark ? "bg-white/10 text-muted-dark" : "bg-white text-muted"
          }`}
        >
          {project.category}
        </span>
      </div>

      <div className="relative z-10 mt-5 max-w-[60%]">
        <p
          className={`text-lg font-semibold tracking-tight ${
            dark ? "text-foreground-dark" : "text-foreground"
          }`}
        >
         {project.name}
        </p>
        <p className={`text-sm ${dark ? "text-muted-dark" : "text-muted"}`}>
          {project.about}
        </p>
      </div>

      {showYear ? (
        <p
          className={`relative z-10 mt-auto max-w-[60%] pt-4 text-xs ${
            dark ? "text-muted-dark" : "text-faint"
          }`}
        >
          {project.year}
        </p>
      ) : null}

      {project.image ? (
        <div className="pointer-events-none absolute -bottom-5 -right-5 h-[46%] w-[58%] origin-bottom-right overflow-hidden rounded-sm shadow-lg ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-3">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 240px, 60vw"
          />
        </div>
      ) : null}
    </a>
  );
}
