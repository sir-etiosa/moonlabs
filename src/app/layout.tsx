import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.brand} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.brand}`,
  },
  description: site.tagline,
  keywords: [
    "senior software engineer for hire",
    "product rescue engineer",
    "MVP development",
    "web3 smart contract engineer",
    "embedded firmware engineer",
    "full-stack contractor",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: site.tagline,
    url: site.url,
    siteName: site.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  description: site.tagline,
  url: site.url,
  image: `${site.url}/icon.png`,
  priceRange: "$$",
  sameAs: ["https://t.me/moonlabs_1"],
  makesOffer: [
    "Product Rescue & Technical Audit",
    "MVP / New Product Build",
    "Web3 & Smart Contract Engineering",
    "Embedded & Hardware Integration",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
