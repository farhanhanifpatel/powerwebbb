import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://powerweb.qa"),

  title: {
    default: "PowerWeb | Best IT & SEO Company in Doha Qatar",
    template: "%s | PowerWeb Qatar",
  },

  description:
    "PowerWeb is the best IT and SEO company in Doha, Qatar. We provide website development, mobile app development, SEO services, digital marketing, and branding solutions to grow your business online.",

  keywords: [
    "SEO company Qatar",
    "SEO services Doha",
    "Best SEO company in Qatar",
    "IT company in Doha",
    "Web development Qatar",
    "Mobile app development Qatar",
    "Comprehensive Mobile App Development Services",
    "Digital marketing Qatar",
    "Website design Doha",
    "Social media marketing Qatar",
    "Social Media Marketing Platforms We Master",
    "Facebook marketing Qatar",
    "Instagram marketing Qatar",
    "LinkedIn marketing Qatar",
    "Tiktok marketing Qatar",
    "Manage IT support Qatar",
    "Cybersecurity services Qatar",
    "Qatar Science and Technology Park (QSTP)",
    "WordPress Website Design",
    "Shopify Store Design & Setup",
    "Custom Web Development Solutions",
    "Creative Web Design That Drives Results",
    "Best web design company in Qatar",
    "Domain & Hosting Setup in Qatar",
    "Healthcare & Medical",
    "Real Estate",
    "Education & Universities, schools, and training institutes",
    "Hospitality & Tourism In Qatar",
    "E-commerce Solutions in Qatar",
    "Financial Services",
    "We deliver high-performance IT solutions that help businesses grow, scale and stay secure in the digital world.",
    "Your Trusted IT Company in Doha",
    "Smart IT Solutions for Your Business",
  ],

  authors: [{ name: "PowerWeb Qatar" }],

  creator: "PowerWeb",
  publisher: "PowerWeb",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "PowerWeb | Best IT & SEO Company in Doha Qatar",
    description:
      "Leading IT, SEO, and digital marketing company in Qatar delivering high-performance websites and mobile apps.",
    url: "https://powerweb.qa",
    siteName: "PowerWeb",
    locale: "en_QA",
    type: "website",
    images: [
      {
        url: "/cropped-PowerWeb-Logo.webp",
        width: 1200,
        height: 630,
        alt: "PowerWeb Qatar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PowerWeb | Best IT & SEO Company in Doha Qatar",
    description:
      "Professional SEO, web development & digital marketing services in Qatar.",
    images: ["/cropped-PowerWeb-Logo.webp"],
  },

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
