"use client"; // This is a client component 👈🏽

import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import "@/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div id="wrap" className={`vh-100 d-flex flex-column ${inter.className}`}>
        <Header />
        <main className="flex-fill">
          {children}
        </main>
        <Footer /> 
      </div>
    </>
  )
}