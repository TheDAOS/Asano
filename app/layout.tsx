import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Asano - Personal Finance App",
  description: "A modern personal finance tracking application built with Next.js 16.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-100 antialiased font-sans ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
