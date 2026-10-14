import { Container, DottedDivider, Section } from "@/components/container";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { PhotoFan } from "@/components/photo-fan";
import { SocialIcons } from "@/components/social-icons";
import { InfoCard } from "@/components/info-card";
import { profile, timeline } from "@/lib/data";
import { Nav } from "@/components/nav";

export default function About() {
  return (
    <div className="flex flex-1 flex-col">
   <Nav />
      <main className="flex-1">
        <Container className="pt-12 md:pt-16">
          <div className="mx-auto max-w-lg">

            <h1 className="mt-6 text-md font-semibold tracking-tight md:text-md">
              Hi, I'm Kamlesh
            </h1>

            <div className="mt-4 space-y-4 text-left text-sm leading-relaxed text-muted">
              <p>
                I’ve spent last 10 years of my life starting companies, making products, and following questions across software,
                 design, and research.I studied computer science and while at university started Tasvee (Saphite Technologies). The 
                 company today known as Photographers4u.

              </p>
              <p>My current work explores intelligent systems, complex interfaces, and what it takes to build enduring organizations.</p>
              <p>I also run @UncubeLabs, an independent design and research lab building new consumer products and services. I share experieces 
                about Design & AI @thedezine&aiacademy.</p>
              <p>
                Outside of work, I write, paint, shoot film, and love architecture —
                always looking for ways to sharpen how I see and make things.
              </p>
            </div>

            
          </div>
        </Container>

        <Container>
          <div className="mx-auto mt-14 max-w-lg">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-surface-muted">
              <img className="rounded-sm" src="/aboutbottom.png" alt="" />
            </div>
            <p className="mt-3 text-sm text-muted">
              Building at{" "}
              <a
                href={profile.currentlyAt.href}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-dotted underline-offset-4"
              >
                {profile.currentlyAt.name}
              </a>
              , previously at neurealm.
            </p>
          </div>
        </Container>

       

        <Section className="pt-0">
          <Container>
            <DottedDivider />
          </Container>
        </Section>

        <Section className="pt-0">
          <Container>
            <div className="mx-auto max-w-lg">
              <h2 className="text-sm font-medium">Experience</h2>
              <ul className="mt-6 divide-y divide-dotted divide-border">
                {timeline.map((entry) => (
                  <li
                    key={`${entry.year}-${entry.role}-${entry.org}`}
                    className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="w-20 shrink-0 text-sm text-faint">{entry.year}</span>
                    <span className="text-sm font-medium">{entry.role}</span>
                    <span className="text-sm text-muted">{entry.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
