import { news } from "@/data/site";
import RichText from "./RichText";

export default function News() {
  return (
    <ul className="space-y-2.5">
      {news.map((item, i) => (
        <li
          key={i}
          className="grid grid-cols-[5.5rem_1fr] gap-3 text-[0.9rem] leading-relaxed"
        >
          <span className="pt-[0.15rem] font-mono text-[0.75rem] text-faint">
            {item.date}
          </span>
          <span className="text-muted">
            <RichText text={item.body} />
          </span>
        </li>
      ))}
    </ul>
  );
}
