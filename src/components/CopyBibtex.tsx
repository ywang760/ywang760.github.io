"use client";

import { useState } from "react";

export default function CopyBibtex({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; leave the label unchanged rather than lying.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded border border-rule px-2 py-0.5 font-mono text-[0.72rem] text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "copied" : "bibtex"}
    </button>
  );
}
