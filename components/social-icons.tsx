import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaPinterest } from "react-icons/fa";
import { FaProductHunt, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { profile } from "@/lib/data";

const iconMap: Record<string, IconType> = {
  "Twitter / X": FaXTwitter,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Pinterest: FaPinterest,
  Medium: FaMedium,
  Peerlist: FaProductHunt,
  Instagram: FaInstagram,
};

export function SocialIcons() {
  return (
    <div className="flex justify-center gap-2">
      {profile.socials.map((social) => {
        const Icon = iconMap[social.name] ?? FaGithub;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-muted text-muted transition-colors hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
