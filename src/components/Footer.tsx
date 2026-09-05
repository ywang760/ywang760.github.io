import { profile, links } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-8">
      <div className="flex flex-col gap-2 font-mono text-[0.72rem] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          <a href={`mailto:${links.email}`} className="link-draw !text-faint hover:!text-accent">
            {links.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
