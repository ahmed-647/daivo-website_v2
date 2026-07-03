import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaiVo — AI Automation & Cloud DevOps",
  description: "We build production-ready AI employees and cloud infrastructure for ambitious startups.",
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE", 
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
        {/* 2. Yeh component yahan zaroor hona chahiye */}
        <Analytics />
      </body>
    </html>
  );
}