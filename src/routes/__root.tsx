import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:site_name", content: "MAVR" },
      { title: "MAVR — India's First Athlete Operating System" },
      {
        name: "description",
        content:
          "MAVR is India's first complete athlete operating system. Track workouts, nutrition, connect with coaches, and earn achievements. Join the waitlist now.",
      },
      {
        name: "keywords",
        content:
          "Indian fitness app, athlete tracking app India, gym tracking app, trainer student app India, fitness app India",
      },
      { property: "og:title", content: "MAVR — Train. Track. Dominate." },
      {
        property: "og:description",
        content: "India's first athlete operating system is loading. Join 1,000 founding athletes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.mavr.in" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@mavr" },
      { name: "twitter:title", content: "MAVR — Train. Track. Dominate." },
      {
        name: "twitter:description",
        content: "India's first athlete operating system is loading.",
      },
      { name: "twitter:image", content: "/favicon.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.mavr.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "preload",
        as: "video",
        href: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4",
        type: "video/mp4",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      // Replace G-XXXXXXXX with your GA4 Measurement ID
      { src: "https://www.googletagmanager.com/gtag/js?id=G-YZF3XBM2B7", async: true },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YZF3XBM2B7');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
