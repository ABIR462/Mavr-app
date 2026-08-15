import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mavr.in"),
  title: "MAVR — Train. Track. Dominate.",
  description: "India's first complete athlete operating system. Track workouts, nutrition, connect with coaches, and earn achievements. Join the waitlist now.",
  keywords: "Indian fitness app, athlete tracking app India, gym tracking app, trainer student app India, fitness app India",
  openGraph: {
    title: "MAVR — Train. Track. Dominate.",
    description: "India's first athlete operating system is loading. Join 1,000 founding athletes.",
    url: "https://www.mavr.in",
    siteName: "MAVR",
    images: [{ url: "/favicon.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mavr",
    title: "MAVR — Train. Track. Dominate.",
    description: "India's first athlete operating system is loading.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YZF3XBM2B7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YZF3XBM2B7');`,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
