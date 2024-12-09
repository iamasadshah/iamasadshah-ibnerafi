import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import NetEffect from "./components/NetEffect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ibnerafi",
  description: "Personal Portfolio of asadshah",
  keywords: [
    "ibnerafi",
    "asadshah",
    "asadullah",
    "syed asadshah",
    "syedasadshah",
    "asadshah portfolio",
    "asadibnerafi",
  ],
  icons: {
    icon: "/favicon.png",
  },
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
        <Navbar />
        <NetEffect />
        {children}
      </body>
    </html>
  );
}
