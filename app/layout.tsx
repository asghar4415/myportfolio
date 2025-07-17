import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asgharali.vercel.app"), // replace with your real domain
  title: {
    default: "Asghar Ali",
    template: "%s | Asghar Ali",
  },
  description: "Personal website of Asghar Ali",
  openGraph: {
    title: "Asghar Ali",
    description: "Personal website of Asghar Ali",
    url: "https://asgharali.vercel.app",
    siteName: "Asghar Ali",
    images: [
      {
        url: "https://asgharali.vercel.app/og-image.png", // update with real OG image
        width: 1920,
        height: 1080,
        alt: "Asghar Ali – Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calSans.variable}`}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
