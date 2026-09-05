import { publications, SELF, type Publication } from "@/data/site";
import CopyBibtex from "./CopyBibtex";

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="text-[0.85rem] leading-relaxed text-muted">
      {authors.map((a, i) => (
        <span key={a}>
          {i > 0 && ", "}
          {a === SELF ? <strong className="font-semibold text-ink">{a}</strong> : a}
        </span>
      ))}
    </p>
  );
}

function LinkRow({ pub }: { pub: Publication }) {
  const items = [
    { label: "arXiv", href: pub.arxiv },
    { label: "site", href: pub.site },
    { label: "code", href: pub.code },
    { label: "video", href: pub.video },
  ].filter((i) => i.href);

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {items.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-rule px-2 py-0.5 font-mono text-[0.72rem] text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {label}
        </a>
      ))}
      <CopyBibtex bibtex={pub.bibtex} />
    </div>
  );
}

function Card({ pub, index }: { pub: Publication; index: number }) {
  return (
    <article className="group grid gap-5 sm:grid-cols-[13rem_1fr]">
      {/* Media slot. Until a clip exists it holds a labelled placeholder rather
          than collapsing, so the layout is already the final layout. */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-rule bg-surface/60 sm:aspect-[4/3]">
        {pub.media ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={pub.media}
            alt={pub.mediaAlt ?? pub.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-[0.68rem] text-faint">
              fig. {index + 1}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[0.72rem] text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-tight">
            {pub.arxiv ? (
              <a
                href={pub.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw !text-ink hover:!text-accent"
              >
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>
        </div>
        <Authors authors={pub.authors} />
        <p className="font-mono text-[0.75rem] text-accent">
          {pub.venue} {pub.year}
        </p>
        <p className="max-w-measure text-[0.9rem] leading-relaxed text-muted">
          {pub.tldr}
        </p>
        <LinkRow pub={pub} />
      </div>
    </article>
  );
}

export default function Publications() {
  return (
    <div className="space-y-12">
      {publications.map((pub, i) => (
        <Card key={pub.id} pub={pub} index={i} />
      ))}
    </div>
  );
}
