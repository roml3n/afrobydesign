import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Header from "@/components/Header";

const ppNeueMontreal = localFont({
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

const ppSupplySans = localFont({
  src: [
    {
      path: "./fonts/PPSupplySans-Regular.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/PPSupplySans-Ultralight.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-supply",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Afro by Design – A Showcase of Exceptional African Digital Design",
  description:
    "Afro by Design curates the most creative and forward-thinking websites and apps made by African designers, developers, and studios. Celebrate African digital excellence.",
  metadataBase: new URL("https://afrobydesign.vercel.app"),
  keywords: [
    "African design",
    "UI/UX inspiration",
    "web design Africa",
    "Afro digital design",
    "creative showcase",
    "African apps",
    "frontend design",
    "design gallery",
    "developer portfolio",
    "Afro by Design",
  ],
  openGraph: {
    title: "Afro by Design – A Showcase of Exceptional African Digital Design",
    description:
      "Explore the finest African-made websites and apps. Afro by Design curates standout digital work from African creatives across the continent.",
    url: "https://afrobydesign.vercel.app",
    siteName: "Afro by Design",
    images: [
      {
        url: "https://afrobydesign.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afro by Design – African Digital Excellence",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afro by Design – A Showcase of African Digital Design",
    description:
      "A curated selection of Africa's best websites, apps, and digital experiences. Built for creatives, by creatives.",
    images: ["https://afrobydesign.vercel.app/og-image.jpg"],
    creator: "@afrobydesign",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ppNeueMontreal.className} ${ppSupplySans.variable}`}
    >
      <body className="relative min-h-screen bg-gray-0 text-gray-10 antialiased">
        <div className="absolute top-0 -z-[200] w-screen h-[30%] bg-gradient-to-b from-blue-5 via-blue-5 to-transparent" />
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
