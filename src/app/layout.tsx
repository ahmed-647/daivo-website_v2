import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DaiVo — AI Automation & Cloud DevOps Agency",
    template: "%s | DaiVo",
  },
  description: "We build production-ready AI employees, custom LLM chatbots, and scalable Cloud/DevOps infrastructure for ambitious startups in Pakistan and the Gulf.",
  keywords: [
    "DaiVo",
    "AI Automation Agency",
    "AI Agency Karachi",
    "AI Agency Pakistan",
    "DevOps-as-a-Service",
    "Cloud Infrastructure",
    "AI Agents",
    "AWS Consultants Pakistan",
    "AI Chatbot Development",
  ],
  authors: [{ name: "Ahmed & Saad", url: "https://www.daivo.tech" }],
  creator: "DaiVo",
  publisher: "DaiVo",

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
        alt: "DaiVo — Engineering Intelligent Systems",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DaiVo",
  alternateName: "DaiVo — Engineering Intelligent Systems",
  url: "https://www.daivo.tech",
  logo: "https://www.daivo.tech/logo.png",
  description: "AI automation and cloud DevOps agency building production-ready AI employees and scalable cloud infrastructure.",
  founders: [
    { "@type": "Person", name: "Muhammad Ahmed" },
    { "@type": "Person", name: "Saad Ullah" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/daivo/",
    "https://github.com/ahmed-647",
    "https://github.com/saadullahmemon900-dot",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact-us@daivo.tech",
    contactType: "customer service",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "name": "AI Customer Support Agent",
        "description": "24/7 intelligent support agent trained on your knowledge base, integrated with your existing tools.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "name": "AI Lead Generation Bot",
        "description": "Qualify and capture leads around the clock, integrated with your CRM.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "name": "AI Data Dashboard",
        "description": "Natural-language analytics on your existing business data.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "name": "DevOps-as-a-Service",
        "description": "Full-stack AWS infrastructure managed end-to-end with CI/CD and 24/7 monitoring.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "name": "AI WhatsApp Agent",
        "description": "Context-aware WhatsApp bot handling bookings, FAQs, and order updates.",
      },
    },
  ],
};

// ======= FIX: EXPORT DEFAULT FUNCTION ADD KAR DIYA HAI =======
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}