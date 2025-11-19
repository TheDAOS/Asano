import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeColorUpdater from "@/components/CommonLayout/ThemeColorUpdater";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asano - Personal Finance App",
  description:
    "A modern personal finance tracking application built with Next.js 16.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`bg-black font-sans text-gray-100 antialiased ${inter.className}`}
      >
        <ThemeColorUpdater color="#a3e635" />
        {children}
      </body>
    </html>
  );
}
