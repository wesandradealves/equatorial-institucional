"use client";
import Brand from "@/components/Brand/Brand";
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