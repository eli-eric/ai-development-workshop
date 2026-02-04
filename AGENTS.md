# Repository Guidelines

## Mission & Scope
This repository powers the Weather Dashboard workshop. The goal is a single App Router page that consumes [Open-Meteo](https://open-meteo.com/en/docs) and uses [shadcn/ui](https://ui.shadcn.com/docs) components to render 2–4 charts (temperature, wind, precipitation, etc.) plus contextual highlights. Keep the architecture approachable, but write code that can expand to more cities or widgets.

## Project Structure & Next.js Principles
- `app/` houses all route segments; `layout.tsx` defines the global shell and `page.tsx` is the dashboard. New routes belong in sibling folders with their own `page.tsx`.
- Prefer **Server Components** for data access and aggregation. They run on the Node runtime, can talk to Open-Meteo without exposing tokens, and allow async/await directly. Use `fetch` with `next: { revalidate: 1800 }` (or similar) for lightweight caching.
- Limit **Client Components** to interactive charts or controls (tabs, sliders). Mark them with `use client` and only pass serializable props.
- Keep shared utilities in `lib/`, static assets in `public/`, and global styles inside `app/globals.css`. Generate shadcn components under `components/` (if added) and import them via predictable aliases so the design system remains centralized.

## Build, Test, and Development Commands
- `npm run dev` – Next.js dev server on port 3000 with HMR, ideal for the workshop loop.
- `npm run build` – production bundle plus type checking.
- `npm run start` – serves the production build locally for SSR/ISR validation.
- `npm run lint` – ESLint with the Next.js config; must be clean before any PR.

## Coding Style & Best Practices
Favor modern TypeScript, functional components, and Tailwind utilities inline in JSX. Name folders/components/hooks in PascalCase (`WeatherCard.tsx`), keep utilities camelCase (`formatTemperature`). Double-check accessibility (aria labels, contrast) and rely on shadcn Cards/Stacks instead of ad-hoc div soup. When integrating chart libraries that need the DOM, use lazy/dynamic imports such as `dynamic(() => import("./Chart"), { ssr: false })` to keep SSR stable.
Always scaffold design-system primitives via the CLI (`npx shadcn@latest add card button ...`) so variants stay in sync with upstream updates—avoid copying component files by hand.

## Testing & Verification
Automated tests are not configured yet, so every PR must include manual verification steps and screenshots. When you add heavier logic (e.g., comfort index calculations), bring in Jest + React Testing Library under `devDependencies`, place specs in `app/__tests__/`, and expose them through an `npm test` script. Each new data transformation should gain at least one unit test once the runner is in place.

## Commit & Pull Request Guidelines
Commit small, focused units of work with imperative subjects (`add wind trend card`). A PR description should state the problem, list the chosen APIs/shadcn components, and attach proof (GIF/screenshot). Before requesting review, run `npm run lint`, `npm run build`, and the manual test steps you documented.
