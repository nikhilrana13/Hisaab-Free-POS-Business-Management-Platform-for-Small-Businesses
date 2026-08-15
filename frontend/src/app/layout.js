import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";
import PersistProvider from "@/providers/PersistProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hisaab | Simple Business Management",
  description:
    "Manage your products, orders, and business insights with Hisaab — a simple business management platform built for small vendors and local businesses.",
  keywords: [
    "Hisaab",
    "business management",
    "small business management",
    "vendor management",
    "shop management",
    "order management",
    "product management",
    "small business software",
  ],
  openGraph: {
    title: "Hisaab | Simple Business Management",
    description:
      "Simple business management for small vendors and local businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersistProvider>
       <ToastProvider />
        {children}
        </PersistProvider>
        </body>
    </html>
  );
}
