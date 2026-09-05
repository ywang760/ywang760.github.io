import { Fragment } from "react";

/** `[label](href)` · `**bold**` · `*italic*` */
const PATTERN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;

/**
 * Renders lightly marked-up copy so text in src/data/site.ts stays plain
 * strings rather than JSX.
 */
export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  PATTERN.lastIndex = 0;
  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));

    const [, linkLabel, href, bold, italic] = match;
    if (linkLabel) {
      parts.push(
        <a
          key={match.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw"
        >
          {linkLabel}
        </a>
      );
    } else if (bold) {
      parts.push(
        <strong key={match.index} className="font-semibold text-ink">
          {bold}
        </strong>
      );
    } else if (italic) {
      parts.push(<em key={match.index}>{italic}</em>);
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));

  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  );
}
