import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { links } from "@/data/site";

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

const SITE = "https://ywang760.github.io";
const TITLE = "Yutong Wang | Robotics, Carnegie Mellon University";
const DESCRIPTION =
  "Yutong Wang is a Master of Science in Robotics student at the CMU Robotics Institute (LeCAR Lab and AirLab), working on aerial manipulation, learning-based control, and multi-robot motion planning. Brown University alum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Yutong Wang",
  authors: [{ name: "Yutong Wang", url: SITE }],
  keywords: [
    "Yutong Wang",
    "Yutong Wang CMU",
    "Yutong Wang Carnegie Mellon",
    "Yutong Wang robotics",
    "aerial manipulation",
    "AM-Bench",
    "multi-robot motion planning",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: "Yutong Wang",
    type: "profile",
    images: [{ url: "/headshot.jpg", alt: "Yutong Wang" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/headshot.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Yutong Wang",
  alternateName: ["汪禹同", "Yutong Wang CMU"],
  url: SITE,
  image: `${SITE}/headshot.jpg`,
  jobTitle: "Master of Science in Robotics student",
  description: DESCRIPTION,
  email: `mailto:${links.email}`,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Carnegie Mellon University, Robotics Institute",
    url: "https://www.ri.cmu.edu/",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Brown University" },
  knowsAbout: [
    "Aerial manipulation",
    "Robot learning",
    "Multi-robot motion planning",
    "Model predictive control",
  ],
  sameAs: [
    links.github,
    links.scholar,
    links.linkedin,
    links.x,
    "https://www.ri.cmu.edu/ri-people/yutong-wang/",
    "https://theairlab.org/team/yutong_wang/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <main className="mx-auto max-w-shell px-6 sm:px-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
