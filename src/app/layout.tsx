import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ywang760.github.io"),
  title: "Yutong Wang",
  description:
    "MSR student at the CMU Robotics Institute working on aerial manipulation and multi-robot motion planning.",
  openGraph: {
    title: "Yutong Wang",
    description:
      "MSR student at the CMU Robotics Institute working on aerial manipulation and multi-robot motion planning.",
    url: "https://ywang760.github.io",
    siteName: "Yutong Wang",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yutong Wang",
    description:
      "MSR student at the CMU Robotics Institute working on aerial manipulation and multi-robot motion planning.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main className="mx-auto max-w-shell px-6 sm:px-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
