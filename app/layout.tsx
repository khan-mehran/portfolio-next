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
    default: "Mehran Khan — Full Stack Developer",
    template: "%s | Mehran Khan",
  },
  description:
    "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js. Building fast, beautiful, and accessible web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend",
    "Portfolio",
  ],
  authors: [{ name: "Mehran Khan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mehran Khan Portfolio",
    title: "Mehran Khan — Full Stack Developer",
    description:
      "Building fast, beautiful, and accessible web applications with Next.js, React, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehran Khan — Full Stack Developer",
    description:
      "Building fast, beautiful, and accessible web applications.",
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
