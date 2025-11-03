import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styles/globals.css";
import { Providers } from "../providers/providers";
import { Header } from "@/views/_layout/header/Header";
import { Footer } from "@/views/_layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lincent Shop",
  description: "Lincent shop let you buy items easily.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-[80svh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
