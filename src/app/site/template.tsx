"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 100,
        }}
        > 
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </motion.div>
    )
  }
