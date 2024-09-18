"use client";
import Brand from "@/components/Brand/Brand";
import VLibras from "@djpfs/react-vlibras";
import { App } from "./style";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <App id="primary" className="d-flex flex-column">
        <motion.div
          className="h-100"
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
          }}
          >       
        {children}
        </motion.div>
      <Brand />
      <VLibras forceOnload={true} />
    </App>
  );
}
