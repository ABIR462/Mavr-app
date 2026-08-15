import type { Metadata, Viewport } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "MAVR — India's Athlete Operating System",
  description: "Built for Indian athletes, Indian nutrition, Indian coaches, and Indian gyms. Claim your founding athlete spot today.",
  keywords: ["MAVR", "Athlete", "Fitness India", "Workout Tracker", "Diet Tracker", "Coach Connect", "Compression Gear"],
  authors: [{ name: "MAVR Team" }],
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Google Fonts directly to prevent layout shifts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
