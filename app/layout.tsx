import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Aruna Makeup Artist | Premium Bridal & Editorial Makeup",
  description: "Professional makeup artist specializing in bridal, editorial, and special occasion makeup. Transform your look with Aruna.",
  keywords: ["makeup artist", "bridal makeup", "editorial makeup", "premium beauty services"],
  openGraph: {
    title: "Aruna Makeup Artist | Premium Bridal & Editorial Makeup",
    description: "Elevating your natural beauty with expert artistry for your most memorable moments.",
    url: "https://arunamakeup.com",
    siteName: "Aruna Makeup Artist",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruna Makeup Artist | Premium Bridal & Editorial Makeup",
    description: "Professional makeup artist specializing in bridal, editorial, and special occasion makeup.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, playfair.variable)}>
      <body className="min-h-screen bg-aruna-ivory font-sans antialiased text-aruna-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
