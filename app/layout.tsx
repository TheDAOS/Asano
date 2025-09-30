import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Asano",
  description: "A personal finance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-gradient-to-br bg-fixed from-black via-gray-900 to-gray-800 text-white overflow-y-auto">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
