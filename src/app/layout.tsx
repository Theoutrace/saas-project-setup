import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import UpdateNotifier from "@/components/layout/alerts/UpdateNotifier";

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
  title: "Saas setup",
  description: "This is a saas setup",
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
        <UpdateNotifier />
        {children}
      </body>
    </html>
  );
}
