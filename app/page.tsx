import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Section } from "@/components/container";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SocialIcons } from "@/components/social-icons";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function Home() {
  const featured = projects[0];

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1">
        <Container>
          <ProfileHero />
        </Container>

        <Section>
          <Container>
            <h2 className="text-sm font-medium">Projects</h2>
            <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </Section>
      </main>


     

      <Footer />
    </div>
  );
}
