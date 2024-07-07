"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
  }