import Link from "next/link";
import { Container, Section } from "@/components/container";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { writing } from "@/lib/writing";

export default function Writing() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        <Section className="pt-0">
          <Container>
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Writing
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                Notes on design, systems and building things.
              </p>
            </div>

            <ul className="mx-auto mt-12 max-w-lg divide-y divide-dotted divide-border">
              {writing.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/writing/${entry.slug}`}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <p className="text-sm font-medium underline decoration-dotted decoration-transparent underline-offset-4 group-hover:decoration-current">
                        {entry.title}
                      </p>
                      {entry.date ? (
                        <p className="mt-1 text-xs text-faint">{entry.date}</p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-xs text-muted">
                      {entry.minutes}m read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
