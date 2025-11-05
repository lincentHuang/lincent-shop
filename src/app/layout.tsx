import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_TC } from "next/font/google";

import "../styles/globals.css";
import { Providers } from "../providers/providers";
import { Header } from "@/views/_layout/header/Header";
import { Footer } from "@/views/_layout/footer/Footer";
import axios from "axios";
import { YStack } from "@/components/YStack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
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
  const data = await axios
    .get("https://api.ipregistry.co/?key=byawq0sgihtv5821")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const country = data.location.country;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} antialiased`}>
        <Providers
          country={{ name: country.name, flag: country.flag.emojitwo }}>
          <Header />
          <main className="w-full flex flex-col items-center">
            <div className="max-w-max-width w-full px-4">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
