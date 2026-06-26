import type { Metadata, Viewport } from "next";
import "./globals.css";
import ScrollTo from "./components/ScrollTo";
import Atmosphere from "./components/Atmosphere";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">
        <Atmosphere />
        <div className="grain" aria-hidden />
        <ScrollTo />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
