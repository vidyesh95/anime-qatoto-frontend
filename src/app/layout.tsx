import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Serif } from "next/font/google";
import ThemeScript from "@/components/theme/theme-script";
import "./globals.css";

/*
 * The variable NAMES matter: the ported components and `globals.css` both speak
 * `--font-sans` / `--font-mono` / `--font-serif`. The create-next-app default named these
 * `--font-geist-sans` / `--font-geist-mono`, which would leave `font-serif` (the wordmark)
 * and every `font-sans` lookup falling through to the browser default.
 */
const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });
const robotoSerif = Roboto_Serif({ variable: "--font-serif", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Anime Qatoto",
    template: "%s · Anime Qatoto",
  },
  description: "Generate anime with AI, edit it in the studio, and publish it to YouTube.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // ThemeScript mutates this element's className before React hydrates, so the server
      // markup and the live DOM legitimately disagree on the first pass.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${robotoSerif.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
