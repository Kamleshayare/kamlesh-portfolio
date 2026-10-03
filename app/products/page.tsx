import { Container, Section } from "@/components/container";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResourceGrid } from "@/components/resource-grid";
import { resources } from "@/lib/resources";

export default function Products() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        <Section className="pt-0">
          <Container wide>
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Products
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                Gear and things I use and recommend.
              </p>
            </div>

            <div className="mt-12">
              <ResourceGrid resources={resources} />
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
