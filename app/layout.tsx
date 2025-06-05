import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const ppNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/ppneuemontreal-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-pp-neue-montreal",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Afro by Design",
  description:
    "A showcase of the most beautiful and unique designs from the Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ppNeueMontreal.className}>
      <body className="min-h-screen bg-gray-0 text-gray-10 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
