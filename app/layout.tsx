import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opmun.com"),
  title: "Opmun | Language, Optimized.",
  description: "A language engineered for the modern mind. Built on logic, optimized for clarity, and sourced from the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body
        className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-fixed min-h-full flex flex-col"
        suppressHydrationWarning
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
