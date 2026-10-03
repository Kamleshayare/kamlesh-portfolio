import Image from "next/image";
import { interests, profile } from "@/lib/data";

function joinWithAnd(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function CompanyLogoPopover({ logo, name }: { logo: string; name: string }) {
  return (
    <span className="pointer-events-none absolute -top-3 left-1/2 z-10 -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-200 ease-out group-hover:-translate-y-[calc(100%+4px)] group-hover:opacity-100">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-black/5 bg-black p-2 shadow-lg">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}

export function ProfileHero() {
  return (
    <div>

      <h1 className="mt-8 text-xl font-semibold leading-tight tracking-tight text-foreground md:text-xl">
        {profile.name}
      </h1>

      <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted">
        <p>{profile.tagline}</p>

        <p>
          Currently designing for Humans & Agents at{" "}
          <span className="group relative inline-block">
            <a
              href={profile.currentlyAt.href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-dotted underline-offset-4"
            >
              {profile.currentlyAt.name}
            </a>
            {profile.currentlyAt.logo ? (
              <CompanyLogoPopover logo={profile.currentlyAt.logo} name={profile.currentlyAt.name} />
            ) : null}
          </span>
          .
          <br />
          Previously at{" "}
          {profile.previouslyAt.map((company, i) => (
            <span key={company.name} className="group relative inline-block">
              <span className="text-foreground underline decoration-dotted underline-offset-4">
                {company.name}
              </span>
              {company.logo ? (
                <CompanyLogoPopover logo={company.logo} name={company.name} />
              ) : null}
              {i < profile.previouslyAt.length - 1 ? ", " : ""}
            </span>
          ))}
          .
        </p>

        <p>{profile.philosophy}</p>

        <p>
          Outside of work I&apos;m usually {joinWithAnd(interests.map((i) => i.toLowerCase()))}
          {" "}— always training my eye and refining my taste.
        </p>
      </div>
    </div>
  );
}
