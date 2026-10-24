import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneThing 3.0 — One Meaningful Thing Each Day",
  description: "A personal photo journal for one meaningful thing each day. Set intentions, capture memories, reflect, and revisit your days with OneThing 3.0.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}