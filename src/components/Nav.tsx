"use client";

import { useEffect, useState } from "react";
import { profile, links } from "@/data/site";

const SECTIONS = [
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-88px 0px -60% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-shell items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <a
          href="#top"
          className={`font-display text-sm font-semibold tracking-tight transition-all duration-300 ${
            scrolled ? "opacity-100" : "-translate-x-1 opacity-0"
          }`}
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
        >
          {profile.name}
        </a>

        <ul className="flex items-center gap-5 text-[0.9rem] sm:gap-7">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors hover:text-accent ${
                  active === id ? "text-accent" : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          {links.cv && (
            <li>
              <a
                href={links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                CV
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
