"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

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
