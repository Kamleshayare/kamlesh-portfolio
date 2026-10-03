import Link from "next/link";
import { Container, DottedDivider } from "@/components/container";
import { navItems } from "@/lib/nav-items";
import { SocialIcons } from "@/components/social-icons";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container wide>
        <DottedDivider />
      </Container>

      <Container
        wide
        className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div>
          <p className="text-sm font-medium text-foreground">{profile.name}</p>
         
        </div>

      

        <SocialIcons />
      </Container>
    </footer>
  );
}
