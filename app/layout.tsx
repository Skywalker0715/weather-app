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

// ...existing code...
export const metadata: Metadata = {
  icons: {
    icon: "/assets/icon.png",
    apple: "/assets/icon.png",
    shortcut: "/assets/icon.png",
    other: [
      { rel: "icon", url: "/assets/icon.png" },
      { rel: "apple-touch-icon", url: "/assets/icon.png" },
      { rel: "shortcut icon", url: "/assets/icon.png" }
    ]
  },
  title: "Aplikasi Cek Cuaca",
  description: "Aplikasi cek cuaca sederhana dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
// ...existing code...