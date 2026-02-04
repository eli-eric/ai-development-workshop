import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const docLinks = [
  {
    label: "Open-Meteo Docs",
    href: "https://open-meteo.com/en/docs",
  },
  {
    label: "shadcn/ui Docs",
    href: "https://ui.shadcn.com/docs",
  },
  {
    label: "Next.js Docs",
    href: "https://nextjs.org/docs",
  },
];

const chartIdeas = [
  {
    title: "Temperature Profile",
    detail: "Plot the next 24 hours of temperature_2m to highlight highs/lows.",
  },
  {
    title: "Wind & Gust Trends",
    detail: "Compare hourly wind_speed_10m and gusts to surface wind risk.",
  },
  {
    title: "Precipitation Radar",
    detail: "Visualize hourly precipitation_probability or rain.",
  },
  {
    title: "Comfort Index",
    detail: "Blend humidity + temperature into a wardrobe recommendation.",
  },
];

const checklist = [
  "Fetch Open-Meteo data in a Server Component with caching.",
  "Render 2–4 charts using shadcn/ui layout primitives.",
  "Add textual highlights (high/low, alert, recommendation).",
  "Document testing notes in your pull request.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16 lg:px-10">
        <Card className="bg-card/80 border-border/80 shadow-2xl shadow-primary/10">
          <CardHeader className="gap-4">
            <Badge
              variant="outline"
              className="tracking-[0.35em] text-[0.7rem] text-primary"
            >
              AI Development Workshop
            </Badge>
            <CardTitle className="text-4xl font-semibold leading-tight md:text-5xl">
              Weather Dashboard Starter Canvas
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Replace this placeholder UI with your real dashboard. Pull
              forecasts from Open-Meteo, assemble shadcn/ui primitives, and ship
              an experience that blends 2–4 charts, rich stats, and actionable
              insights.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {docLinks.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                asChild
                className="rounded-full border-muted-foreground/40 text-sm"
              >
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="gap-2">
              <Badge variant="secondary" className="tracking-[0.4em] text-[0.6rem]">
                Checklist
              </Badge>
              <CardTitle className="text-2xl">Kick-off Steps</CardTitle>
              <CardDescription>
                Touch these items before you dive into the charts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border/60 px-4 py-3 text-sm"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-background via-background to-muted">
            <CardHeader className="gap-2">
              <Badge variant="secondary" className="tracking-[0.4em] text-[0.6rem]">
                API
              </Badge>
              <CardTitle className="text-2xl">Sample Open-Meteo Query</CardTitle>
              <CardDescription>
                Extend with wind, precipitation, and clouds as needed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <code className="block overflow-x-auto rounded-2xl bg-muted p-4 text-sm">
                https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m
              </code>
              <Separator />
              <p className="text-sm text-muted-foreground">
                Fetch this from a Server Component, enable revalidation (e.g.
                30&nbsp;minutes), and pass the serialized subset to your chart
                clients.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className="w-fit tracking-[0.3em]">
              Charts to build
            </Badge>
            <h2 className="text-2xl font-semibold">
              Select two to four visualizations and bring them to life.
            </h2>
            <p className="text-sm text-muted-foreground">
              Use Cards, Tabs, and Skeletons from shadcn/ui to keep the look
              cohesive.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {chartIdeas.map((idea) => (
              <Card key={idea.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{idea.title}</CardTitle>
                  <CardDescription>{idea.detail}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="h-32 rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/40" />
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="h-px flex-1 bg-border" />
                    <span>Placeholder</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
