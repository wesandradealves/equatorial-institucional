"use client";
import Brand from "@/components/Brand/Brand";
import VLibras from "@djpfs/react-vlibras";
import { App } from "./style";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <App id="primary" className="d-flex flex-column">
      {children}
      <Brand />
      <VLibras forceOnload={true} />
    </App>
  );
}
