# Learning Guide — Tailwind utilities in this project

This guide helps you quickly understand how Tailwind-style utility classes are used in this codebase, where to edit look-and-feel, and how to make safe changes.

Goal
- Let you learn Tailwind utilities in-place so you can edit components directly and push changes yourself.

Quick start
- Run the dev server: `npm run dev`
- Build for production: `npm run build`

Where styles live
- Global tokens & component CSS: `src/index.css` — contains CSS variables (colors, radii), many utility-like rules, and component styles.
- Per-section CSS: `src/components/sections/*.css` (e.g., `About.css`) — more localized styles.
- Component JSX: `src/components/**` — className attributes contain the utility classes you change.

How Tailwind utilities appear here
- This project uses Tailwind-style utility class names manually in `className` props (e.g. `flex`, `gap-3`, `md:flex-row`, `w-full`).
- Many larger patterns are implemented with semantic classes and CSS in `src/index.css` (e.g., `.bento-card`, `.hero-title`). When you see a semantic class, change the CSS in `src/index.css`.

Examples — reading the syntax
- `className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 px-8"`
  - `flex` → display:flex
  - `flex-col` → flex-direction: column
  - `md:flex-row` → at the `md` breakpoint switch to row direction
  - `items-center` → align-items: center
  - `justify-between` → justify-content: space-between
  - `gap-6` → gap spacing (lookup `index.css` for exact value)
  - `py-8 px-8` → vertical/horizontal padding

Where to edit common things
- Colors / theme tokens: `:root` variables in `src/index.css` — edit here to change site-wide colors.
- Spacing scale: look for `--gutter` and other variables in `src/index.css`.
- Component layout (grids, bento cards): `About.css` and `.bento-grid` / `.bento-card` in `src/index.css`.
- Reusable components (change markup & classes): `src/components/ui/*` (e.g., `Button.jsx`, `ProjectCard.jsx`).

Finding where a class is used
- Use repo search (or grep) for `className="..."` or search for the specific utility name: e.g., `grep -R "gap-6" src`.

Safe-editing workflow
1. Create a new branch: `git checkout -b edit-<feature>`
2. Make one focused change (e.g., change padding on `Downloads.jsx`) and run `npm run dev` to preview.
3. Commit with a descriptive message: `git add -A && git commit -m "fix: adjust Downloads padding"`.
4. Push and create a PR when ready: `git push origin edit-<feature>`.

Key files to study (short pointers)
- `src/index.css` — global tokens, utility-like helper rules, and card/section styles.
- `src/components/ui/Button.jsx` — button variants implemented with className strings; change `variants` mapping to adjust styles.
- `src/components/sections/Downloads.jsx` — resume/cover/CV downloads.
- `src/components/sections/About.jsx` — bento grid layout using semantic classes plus utility classes.
- `src/hooks/useScrollProgress.js` — scroll progress logic (used by the floating widget).
- `src/components/ui/ScrollProgressBar.jsx` — the floating draggable widget you can tweak.

Learning resources
- Tailwind docs (utilities): https://tailwindcss.com/docs
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:` — these map to media queries.

If you want, I can:
- Add inline comments in a few key files explaining the class groups.
- Create a short PR checklist so you can make safe edits.

— End of guide
