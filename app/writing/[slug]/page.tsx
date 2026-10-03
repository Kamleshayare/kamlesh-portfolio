import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section } from "@/components/container";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { writing } from "@/lib/writing";

export function generateStaticParams() {
  return writing.map((entry) => ({ slug: entry.slug }));
}

export default async function WritingDetail(
  props: PageProps<"/writing/[slug]">,
) {
  const { slug } = await props.params;
  const entry = writing.find((w) => w.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        <Section className="pt-0">
          <Container>
            <div className="mx-auto max-w-lg">
              <Link
                href="/writing"
                className="text-xs font-medium uppercase tracking-wide text-faint hover:text-muted"
              >
                ← Writing
              </Link>

              <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {entry.title}
              </h1>

              <div className="mt-3 flex items-center gap-2 text-xs text-faint">
                {entry.date ? (
                  <>
                    <span>{entry.date}</span>
                    <span>·</span>
                  </>
                ) : null}
                <span>{entry.minutes}m read</span>
              </div>

              {entry.dek ? (
                <p className="mt-4 text-sm text-muted">{entry.dek}</p>
              ) : null}

              <div className="mt-10 space-y-5 text-sm leading-relaxed text-muted">
                {entry.body.map((block, index) => {
                  if (block.type === "p") {
                    return <p key={index}>{block.text}</p>;
                  }

                  if (block.type === "h2") {
                    return (
                      <h2
                        key={index}
                        className="pt-2 text-sm font-medium text-foreground"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-2 border-border pl-4 italic text-foreground"
                      >
                        <p>{block.text}</p>
                        {block.cite ? (
                          <cite className="mt-2 block text-xs not-italic text-faint">
                            — {block.cite}
                          </cite>
                        ) : null}
                      </blockquote>
                    );
                  }

                  return (
                    <ul key={index} className="list-disc space-y-1 pl-5">
                      {block.items.map((item) => (
                        <li key={item.text}>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
                            >
                              {item.text}
                            </a>
                          ) : (
                            item.text
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
