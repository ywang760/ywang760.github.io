"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

// TODO: add meta tags
const meta: Metadata = {
  title: "Yutong Wang",
  description: "Yutong Wang's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Yutong Wang</title>
        {/* metadata */}
      </Head>
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Navbar />
        <main className="flex flex-col px-8 md:px-20 xl:px-60 py-8 flex-grow overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
