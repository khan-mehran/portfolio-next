import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/layout/CursorGlow";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mehran Khan — Senior Frontend Developer",
    template: "%s | Mehran Khan",
  },
  description:
    "Senior Frontend Developer in Doha, Qatar. 5+ years building enterprise web applications for Qatar government and leading organizations using React.js, Next.js, and TypeScript.",
  keywords: [
    "Senior Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Qatar",
    "Portfolio",
  ],
  authors: [{ name: "Mehran Khan" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mehran Khan Portfolio",
    title: "Mehran Khan — Senior Frontend Developer",
    description:
      "Senior Frontend Developer in Doha, Qatar. Building enterprise web apps with React.js and Next.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehran Khan — Senior Frontend Developer",
    description:
      "Senior Frontend Developer in Doha, Qatar. React.js & Next.js specialist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
