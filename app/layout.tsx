import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Or your preferred font
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] }); // Replace with your actual font if different
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable:"--font-montserrat" }); 

export const metadata: Metadata = {
  title: "P23 Africa - Gaining Knowledge Through Connection",
  description: "Explore upcoming events tailored to equip, connect, and empower businesses across Africa and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}