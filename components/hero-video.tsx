import { Nav } from "@/components/nav";

export function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background-dark">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/herovid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/45 to-transparent" />

      <div className="absolute inset-x-0 top-0">
        <Nav variant="dark" />
      </div>
    </section>
  );
}
