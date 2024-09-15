import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppHeader from "@/components/Header";

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
  title: "Gnose Media",
  description: "Gnose social media application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <main className="flex flex-col min-h-screen h-full w-full">
          <AppHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
