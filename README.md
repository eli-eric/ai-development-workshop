# AI Development Workshop – Weather Dashboard

This repository is the practice app for a Next.js “vibe coding” workshop. Participants build a weather dashboard backed by the [Open-Meteo API](https://open-meteo.com/en/docs) and styled with [shadcn/ui](https://ui.shadcn.com/docs). Core framework reference: [Next.js docs](https://nextjs.org/docs).

## Dashboard Brief
- Implement the primary page (`app/page.tsx`) that fetches a forecast such as `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`.
- The dashboard must display 2–4 charts or visual widgets:
  - **Temperature profile** showing the next 24 hours.
  - Additional charts of your choice: precipitation, wind, cloud cover, min/max comparison, comfort index, etc.
- Add supporting highlights (record high/low, recommendations like “what to wear”).
- Provide a responsive layout (desktop/tablet first, stacked cards on mobile) and keep colors/typography consistent with shadcn tokens.

## Tech Stack & Expectations
- **Next.js 16 App Router** – use Server Components for data fetching and derived stats, Client Components only for interactive charts; take advantage of `metadata` and `generateStaticParams` if you introduce multiple cities.
- **Open-Meteo API** – call it from the server, cache responses with `fetch` options such as `next: { revalidate: 1800 }` or the Cache API to keep the UI snappy.
- **shadcn/ui** – rely on Cards, Tabs, Skeleton, Dialog, and form primitives for city selection and layout scaffolding.
- Charts can be plain SVG components, `recharts`, `visx`, or Canvas; just keep styling cohesive with shadcn.

## Local Development
```bash
npm install
npm run dev
```
The dev server runs at `http://localhost:3000`. Before committing, run `npm run lint` and at least once `npm run build` to confirm types and bundling.
