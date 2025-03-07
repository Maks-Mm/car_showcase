// layout.tsx
import React from "react"; // Import React
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { MyProvider } from "@/app/MyContext"; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <MyProvider> {/* Wrap the components with MyProvider */}
          <Navbar />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html>
  );
}
