import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "./components/layout/Header"; // ✅ import header
import Footer from "./components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PowerWeb",
  description: "Best IT Company in Doha, Qatar",
  icons: {
    icon: [
      {
        url: "/cropped-PowerWeb-Logo.webp",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Header added */}
        <Header />

        {/* Page Content */}
        {children}

        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
