import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/assets/globals.css";

export const metadata: Metadata = {
  title: "MAVR - India's Athlete Operating System",
  description: "Training. Nutrition. Coach Connect. Achievements. Community. One platform built entirely for the Indian athlete.",
  icons: {
    icon: "/mavr-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
