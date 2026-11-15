# Sivaram S — Turning Your Ideas into Reality

A personal portfolio rebuilt around the supplied 73-second orange/red portfolio recording, using Sivaram’s supplied résumé and original portrait.

## Run in Antigravity

Open this folder in Antigravity (or another editor) with Node.js 20.9+ and pnpm installed.

```sh
corepack enable
pnpm install
pnpm dev
```

Visit http://localhost:3000. To check and export:

```sh
pnpm typecheck
pnpm build
```

The static production website is written to `out/`. It can be deployed to any static web host. Antigravity itself was not operated: this environment cannot remotely control the user’s Windows desktop.

## Design and motion

- Full-screen orange/red hero with the user’s black-hoodie portrait as a transparent cutout. The portrait uses normal compositing with no orange blend mode, color filter, or shading overlay.
- Scroll-linked hero shrink into a two-column project collage. WebGL measures unscaled layout dimensions to prevent the background seam during this transition.
- Smooth pointer depth: the portrait moves in front of the headline at a different speed. Disabled for touch, reduced motion, and the pause toggle.
- White pill buttons become dark with light text on hover or keyboard focus.
- Curved gradient work section with a pinned project sequence, manual selectors, and case-study dialogs.
- Horizontal services sequence, journey rows, floating technology marks, a keyboard-accessible about carousel, FAQ accordion, and glowing contact footer.
- Mobile uses natural scrolling and manual project selection. Motion can be paused; reduced-motion preferences are respected.

The recording is a visual reference. Its original designer’s name, project artwork, awards, and testimonials are not reused. Layout, gradients, and motion are recreated in original application code. No paid animation assets or third-party template source are included.

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis, Motion, Three.js, React Three Fiber, and Drei. `Aurora.tsx` uses a custom GLSL shader on a screen quad for the subtle hero background. A CSS gradient is the fallback when WebGL 2 is unavailable. Rendering pauses offscreen and respects the motion toggle; device pixel ratio is limited.

Fonts are installed locally. No runtime CDN, external image, model, or HDR requests are required. The existing lockfile pins the exact dependency versions.

## Edit these files

| File | Purpose |
| --- | --- |
| `lib/content.ts` | Verified profile details, project contributions, skills, experience, education, and FAQs |
| `components/Portfolio.tsx` | Sections, GSAP timelines, navigation, project details, and contact dialog |
| `components/ProjectArtwork.tsx` | Original responsive illustrations for the four real project descriptions |
| `components/HeroDepth.tsx` | Smoothed pointer parallax and motion preference cleanup |
| `components/Aurora.tsx` | Three.js / R3F / Drei background and GLSL shader |
| `app/globals.css` | Layout, orange/red theme, portrait compositing, and responsive styles |
| `public/images/sivaram-hero-cutout.png` | Transparent hero portrait, with the photograph’s own colors preserved |
| `public/images/sivaram.jpg` | Earlier user-supplied portrait retained in the about section |
| `public/files/Sivaram-S-Resume.pdf` | User-supplied résumé, downloadable from the site |

## Content accuracy

The profile, internship, freelance work, education, certifications, contact information, and social links are taken from the supplied résumé. No client testimonials, awards, performance outcomes, or employment history have been invented.

Project visuals are **portfolio illustrations, not screenshots of the delivered websites**. The project dialogs state this explicitly. Dashboard figures are illustrative. “Construction OS” is a portfolio presentation name for the construction management dashboard described in the résumé. Specific project URLs were not supplied; the project dialogs link to the provided GitHub profile rather than invented repositories or deployments.

The contact dialog creates a mailto draft or copies it to the clipboard. It does not automatically send emails or submit contact data to a backend. The original résumé includes the user’s phone and email, which are also displayed in the contact section.

## Component licenses and workflow tools

All UI and animation sequences are custom implementations. No Hyperiux code was imported because its repository was not supplied; no paid components were purchased. See `THIRD_PARTY_NOTICES.md` and `public/third-party-notices.txt` for installed dependency notices.

The earlier Figma file describes the previous design and is not the design source for this revision. This revision follows the supplied recording directly.

## Verification and limits

The optimized production export and TypeScript check passed. Browser QA verified the hero/collage transition, pinned work selector, project dialogs, horizontal services animation, copied contact drafts, about carousel, FAQ controls, and mobile/tablet layouts without horizontal overflow. Browser QA runs against that exported artifact because the managed container’s Next.js development server has an environment-specific memory diagnostic failure. Local development still uses the normal Next.js CLI.

The QA browser does not support WebGL 2. CSS fallback rendering is verified; hardware shader rendering still needs a WebGL-capable browser. The live code path includes Three.js, React Three Fiber, Drei, and the custom shader.

## Replacing the first three projects

Change their titles and descriptions in `lib/content.ts`, retaining the internal IDs. Add screenshots under `public/images/projects/` and set each path in `lib/project-images.ts`. Those images appear in the large work previews, collage, and dialogs. Use landscape screenshots; previews crop from the top to fill the frame.

Selected Work now uses a larger pinned card stack: incoming projects rise from below while earlier projects dim. Animation follows scroll position in both directions; mobile and reduced-motion visitors use the manual project selectors.
