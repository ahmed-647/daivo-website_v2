import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaiVo — AI Automation & Cloud DevOps Agency",
  description: "We build production-ready AI employees, custom LLM chatbots, and scalable Cloud/DevOps infrastructure for ambitious startups.",
  keywords: ["AI Automation", "DevOps-as-a-Service", "Cloud Infrastructure", "AI Agents", "Next.js", "AWS Consultants"],
  authors: [{ name: "Ahmed & Saad", url: "https://daivo.tech" }],
  
  // Google Search Console Verification
  verification: {
    google: "nY4yWw98v4BucGHHX_lwP3e2YJvwgplANCHnntJ5SDU", 
  },

  // Premium Preview for LinkedIn, DMs, & WhatsApp (OpenGraph)
  openGraph: {
    title: "DaiVo — AI Automation & Cloud DevOps Agency",
    description: "Production-ready AI employees and automated cloud infrastructure built for scale.",
    url: "https://daivo.tech",
    siteName: "DaiVo",
    images: [
      {
        url: "https://daivo.tech/opengraph-image.png", // public/ folder mein koi bhi banner opengraph-image.png ke naam se rakh dena baad mein
        width: 1200,
        height: 630,
        alt: "DaiVo Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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