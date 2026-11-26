# Project memory

## Product intent & audience

- Personal portfolio website showcasing projects (six project cards with photos) and a hero portrait.

## Brand personality & voice

- Not yet explicitly defined; current content is project-portfolio oriented.

## Visual design & UX direction

- Hero section with portrait image.
- Six project cards, each with a photo.
- Interactive features: mobile menu/navigation, scroll animations, reading progress bar.
- Interactions powered by a main client script (`app.js`), now bundled as a Vite entry module.

## Decisions, constraints & rationale

- Build tool: Vite, serving static assets from `public/`.
- `package.json` was missing and caused deployment failure (`ENOENT`); created with proper scripts and dependencies.
- Vite config added so the build pipeline serves the portfolio site from `public/` and bundles the main script.
- `app.js` was originally a loose script not included in build output; converted to a module entry so Vite bundles it into the production build.
- Production build verified end-to-end: output contains all six project card photos, hero portrait, styles, and bundled script.

## Open questions & assumptions

- Deployment target specifics unknown; assumed standard npm-based publish flow.
- Exact dependency versions and full `package.json` contents not confirmed in this turn.
- No `.bolt/prompt` authoritative instructions exist yet.