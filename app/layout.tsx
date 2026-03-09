import "./globals.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

const siteUrl = "https://eshita-tech.xyz";

export const metadata: Metadata = {
  title: "Eshita Bhawsar | Full Stack Developer",
  description:
    "Full Stack Developer portfolio — React, Next.js, TypeScript, Node.js. 10K+ users served across 6 live deployments. Open to opportunities.",
  keywords: [
    "Eshita Bhawsar",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer India",
    "Frontend Developer",
  ],
  authors: [{ name: "Eshita Bhawsar" }],
  creator: "Eshita Bhawsar",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eshita Bhawsar | Full Stack Developer",
    description:
      "Full Stack Developer portfolio — React, Next.js, TypeScript, Node.js. 10K+ users served across 6 live deployments.",
    siteName: "Eshita Bhawsar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eshita Bhawsar — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshita Bhawsar | Full Stack Developer",
    description:
      "Full Stack Developer portfolio — React, Next.js, TypeScript, Node.js. 10K+ users served across 6 live deployments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-retro-bg text-retro-comment font-retro min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
