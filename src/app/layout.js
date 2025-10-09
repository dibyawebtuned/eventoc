import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "The Events OC | Event Management & Decoration Services",
    template: "%s | The Events OC",
  },
  description:
    "The Events OC offers professional event management, decoration, and coordination services — creating unforgettable experiences for weddings, corporate functions, and celebrations across Nepal.",
  keywords: [
    "Event management Nepal",
    "Wedding planner",
    "Corporate events",
    "Event decoration",
    "Birthday party setup",
    "The Events OC",
    "Stage design",
    "Event styling",
  ],
  authors: [{ name: "The Events OC Team" }],
  creator: "The Events OC",
  publisher: "The Events OC",

  openGraph: {
    title: "The Events OC | Event Management & Decoration Services",
    description:
      "Creating beautiful and memorable events through expert planning, styling, and decoration.",
    url: "https://theeventsoc.com",
    siteName: "The Events OC",
    images: [
      {
        url: "/assets/img/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "The Events OC event setup and decoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Events OC | Event Management & Decoration Services",
    description:
      "Professional event management, styling, and decoration for weddings, parties, and corporate functions.",
    images: ["/assets/img/og-banner.jpg"],
    creator: "@theeventsoc",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL("https://theeventsoc.com"),
  alternates: {
    canonical: "https://theeventsoc.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
