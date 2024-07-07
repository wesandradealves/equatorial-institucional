"use client";
import Brand from "@/components/brand/brand";
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>
                {children}
            </main>
            <Brand />             
        </>
    )
  }