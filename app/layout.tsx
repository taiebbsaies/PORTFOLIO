import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Taieb Bsaies — Full-Stack Web & Mobile Developer",
  description:
    "I'm Taieb, a software engineering student at ESPRIT in Tunis. I build web and mobile products across the stack, from user interfaces and APIs to databases and deployment.",
  openGraph: {
    title: "Taieb Bsaies — Full-Stack Web & Mobile Developer",
    description:
      "Web and mobile products built across the stack by Taieb Bsaies, software engineering student at ESPRIT in Tunis.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
