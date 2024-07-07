import Image from "next/image";
import { ConfigTypo } from '@/types/enums';
import { Container, Copyright } from './style';
import { useContext } from "react";
import ConfigProvider from "@/context/store";

export default function Brand(props: ConfigTypo) {
  const { config } = useContext<any>(ConfigProvider);
  return (
    <Container>
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
        {config?.logo && <Image
          src={config?.logo}
          alt={config?.site_name}
          width={120}
          height={34}
        />}       

        {config?.copyright && config?.copyright?.pt_br && <Copyright>{config?.copyright?.pt_br}</Copyright>} 
      </div>
    </Container>
  );
}
