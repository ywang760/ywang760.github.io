# ywang760.github.io

Personal academic homepage — a single-page Next.js site, statically exported and
served from GitHub Pages at <https://ywang760.github.io>.

## Deployment

Push to `master`. That is the whole process: `.github/workflows/deploy.yml`
builds the static export and publishes it to Pages. There is no other hosting,
no Vercel project, and no manual publish step. Work in progress goes on a
feature branch, which never triggers a deploy.

```bash
npm run dev     # local dev server on :3000
npm run build   # static export into out/
```

## Editing content

Nearly all site content — bio, news, publications, links — lives in
[`src/data/site.ts`](src/data/site.ts). Adding a paper or a news item means
editing that file only; the components read from it. Bio and news strings
support `[label](href)`, `**bold**` and `*italic*` via
[`RichText`](src/components/RichText.tsx).

That file also ends with an intentionally commented-out block (reviewing
service, MBZUAI fellowship). It is disabled on purpose, not dead code — the
comment explains how to re-enable each item.

## Video assets

**Source videos go in `media-masters/`, never in `public/`.**

`next build` copies everything under `public/` into `out/`, and `out/` is what
the workflow uploads to Pages. A `.gitignore` rule keeps masters out of git, but
it does *not* keep them out of the deploy — a master left in `public/media/`
gets published to the open web and blows up the Pages artifact.

So: masters live in `media-masters/` (gitignored, outside `public/`), and only
the transcoded `*-web.mp4` versions are committed under `public/media/` and
referenced from `site.ts`.

Transcoding, roughly:

```bash
ffmpeg -i media-masters/<name>.mp4 \
  -vf "scale=1920:1080,fps=30" \
  -an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart \
  public/media/<name>-web.mp4
```

Keep the exported site small — `du -sh out` should stay in the low single-digit
megabytes.
