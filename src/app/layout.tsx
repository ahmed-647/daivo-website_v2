import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaiVo — AI Automation & Cloud DevOps",
  description: "We build production-ready AI employees and cloud infrastructure for ambitious startups.",
  verification: {
    // Tumhaara actual google verification token ab sahi se dal gaya hai
    google: "nY4yWw98v4BucGHHX_lwP3e2YJvwgplANCHnntJ5SDU", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}