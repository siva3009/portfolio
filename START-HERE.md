# Start here — Antigravity

This is the full source of the published portfolio, including the latest transparent black-hoodie hero photo.

1. Extract this ZIP.
2. Open the siva-portfolio folder in Antigravity.
3. With Node.js 22 and pnpm installed, open a terminal in that folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

4. Open http://localhost:3000 in your browser. Keep the terminal running.

To validate and build:

```sh
pnpm typecheck
pnpm build
```

The production static export is generated in out/.

## Where to edit

- lib/content.ts: profile, projects, skills, experience, FAQs
- components/Portfolio.tsx: page sections and animations
- app/globals.css: theme, spacing, responsive layout
- components/Aurora.tsx: shader background
- components/ProjectArtwork.tsx: project illustrations
- public/images/sivaram-hero-cutout.png: transparent hero portrait

The portrait has no orange filter or multiply blend mode. Preserve that when editing. The contact form opens an email draft; it has no mail server backend. No API keys or environment variables are required for the current app.

Dependencies and generated build folders are intentionally excluded; installation and build recreate them. Git history and ChatGPT hosting configuration are excluded for a portable local handoff. See README.md and THIRD_PARTY_NOTICES.md for full details.
