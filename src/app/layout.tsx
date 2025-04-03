import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '../components/Navigation'
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Durham Baseball Bible Zine",
  description: "Collected Gospel from the Church of Baseball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Left Field Church Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Left Field Church</h1>
                <h2 className="text-xl text-gray-600">A Durham Baseball Bible Zine</h2>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
        <main>
          {children}
        </main>
        <footer className="border-t-2 border-black py-4 mt-8">
          <div className="zine-container text-center text-sm">
            © {new Date().getFullYear()} Baseball Zine
          </div>
        </footer>
      </body>
    </html>
  );
}
