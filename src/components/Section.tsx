import type { ReactNode } from "react";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-20">
      <div className="mb-7 flex items-baseline gap-3 border-b border-rule pb-2.5">
        <span className="font-mono text-[0.72rem] text-accent">{index}</span>
        <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
