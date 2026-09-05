import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { profile, links } from "@/data/site";
import RichText from "./RichText";

const social = [
  { href: `mailto:${links.email}`, label: "Email", Icon: FaEnvelope },
  { href: links.scholar, label: "Google Scholar", Icon: SiGooglescholar },
  { href: links.github, label: "GitHub", Icon: FaGithub },
  { href: links.x, label: "X", Icon: FaXTwitter },
  { href: links.linkedin, label: "LinkedIn", Icon: FaLinkedin },
];

export default function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20">
      <div className="flex items-center gap-5">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={240}
          height={240}
          priority
          className="h-20 w-20 rounded-full object-cover ring-1 ring-rule sm:h-24 sm:w-24"
        />
        <div className="space-y-1.5">
          <h1 className="flex flex-wrap items-baseline gap-x-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
            <span className="text-lg font-normal text-faint sm:text-xl">
              {profile.nameZh}
            </span>
          </h1>
          <p className="text-[0.95rem] leading-snug text-muted">
            {profile.role} ·{" "}
            <a
              href="https://www.cmu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw"
            >
              {profile.affiliation}
            </a>
          </p>
        </div>
      </div>

      <p className="mt-9 max-w-measure font-display text-2xl leading-[1.35] tracking-tight sm:text-[1.75rem]">
        {profile.tagline}
      </p>

      <div className="mt-6 max-w-measure space-y-4 text-[0.95rem] leading-relaxed text-muted">
        {profile.bio.map((para, i) => (
          <p key={i}>
            <RichText text={para} />
          </p>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="flex items-center gap-2.5 font-mono text-[0.78rem] text-muted">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-blink"
            aria-hidden="true"
          />
          <span className="text-faint">now</span>
          {profile.now}
        </p>

        <ul className="flex items-center gap-4">
          {social
            .filter((s) => s.href)
            .map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="block text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
