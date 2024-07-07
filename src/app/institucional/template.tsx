"use client";
import Footer from "@/components/footer/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
  }