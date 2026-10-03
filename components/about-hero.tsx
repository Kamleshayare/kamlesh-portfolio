import Image from "next/image";
import { Nav } from "@/components/nav";
import { profile } from "@/lib/data";

export function AboutHero() {
  return (
    <section className="relative min-h-3/4 w-full overflow-hidden bg-background-dark">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/herovid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-x-0 bottom-0 aspect-2400/841 w-full">
        <Image
          src="/boy.png"
          alt="Silhouette standing on a hilltop, looking out at the sky"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/40 to-transparent" />

      <div className="absolute inset-x-0 top-0">
        <Nav variant="dark" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 pt-24 md:p-10 md:pt-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground-dark backdrop-blur-sm">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                profile.available ? "bg-accent" : "bg-white/40"
              }`}
            />
            {profile.available ? "Available for work" : "Currently unavailable"}
          </span>
          <span className="text-xs font-medium tracking-wide text-white/70">
            Still Climbing
          </span>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-white/70">
            {profile.role}
          </p>
          <h1 className="mt-2 max-w-sm text-3xl font-semibold leading-[1.05] tracking-tight text-white md:max-w-md md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xs text-sm italic leading-relaxed text-white/80 md:max-w-sm md:text-base">
            {profile.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
