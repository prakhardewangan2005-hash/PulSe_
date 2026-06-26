import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollTo from "./components/ScrollTo";
import Atmosphere from "./components/Atmosphere";

const geist = Geist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse — Context-Aware Focus System",
  description:
    "Pulse reads your cognitive context and quietly reshapes your environment around it. An ambient intelligence layer for deep work.",
  metadataBase: new URL("https://pulse-fawn-five.vercel.app"),
  openGraph: {
    title: "Pulse — Context-Aware Focus System",
    description:
      "An ambient intelligence layer for deep work. Context-aware. On-device. Quiet.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="relative">
        <Atmosphere />
        <div className="grain" aria-hidden />
        <ScrollTo />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
