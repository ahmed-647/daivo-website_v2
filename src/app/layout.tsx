import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaiVo — AI Automation & Cloud DevOps Agency",
  description: "We build production-ready AI employees, custom LLM chatbots, and scalable Cloud/DevOps infrastructure for ambitious startups.",
  keywords: ["AI Automation", "DevOps-as-a-Service", "Cloud Infrastructure", "AI Agents", "Next.js", "AWS Consultants"],
  authors: [{ name: "Ahmed & Saad", url: "https://www.daivo.tech" }],

  metadataBase: new URL("https://www.daivo.tech"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "nY4yWw98v4BucGHHX_lwP3e2YJvwgplANCHnntJ5SDU",
  },

  openGraph: {
    title: "DaiVo — AI Automation & Cloud DevOps Agency",
    description: "Production-ready AI employees and automated cloud infrastructure built for scale.",
    url: "https://www.daivo.tech",
    siteName: "DaiVo",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DaiVo Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DaiVo — AI Automation & Cloud DevOps Agency",
    description: "Production-ready AI employees and automated cloud infrastructure built for scale.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}