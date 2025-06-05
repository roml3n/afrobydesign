import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";

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
      <body className="relative min-h-screen bg-gray-0 text-gray-10 antialiased">
        <div className="absolute top-0 -z-[200] w-screen h-[30%] bg-gradient-to-b from-blue-0 via-blue-0 to-transparent" />
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
