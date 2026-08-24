import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Minifier | Bookchaowalit",
  description: "Lightweight JS / CSS / HTML / JSON minifier that runs entirely client-side.",
  keywords: ["minifier","compress","js","css","html"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  publisher: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Code Minifier | Bookchaowalit",
    description: "Lightweight JS / CSS / HTML / JSON minifier that runs entirely client-side.",
    siteName: "Bookchaowalit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Minifier | Bookchaowalit",
    description: "Lightweight JS / CSS / HTML / JSON minifier that runs entirely client-side.",
    creator: "@bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*
          THESIS: make compression feel like a physical chamber where source enters and a smaller artifact leaves.
          OWN-WORLD: graphite, acid output ink, orange safety marks, and a ruled material bench define the tool.
          STORY: choose a source shape, inspect the material, run the chamber, then copy the compacted artifact.
          FIRST VIEWPORT: the compression promise, browser-only boundary, mode rail, and source/output bench are visible immediately.
          FORM: industrial labels, flat controls, measured byte readouts, and one primary run action define every state.
          SEED: 87225a7b · assigned direction 3 · operate mode.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        {children}
      </body>
    </html>
  );
}
