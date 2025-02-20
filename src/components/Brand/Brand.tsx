import Image from "next/image";
import { ConfigTypo } from '@/types/enums';
import { Container, Copyright } from './style';
import { useContext, useEffect } from "react";
import ConfigProvider from "@/context/config";
import LanguageProvider from "@/components/LanguageSwitcher/context";
import Link from "next/link";

export default function Brand(props: ConfigTypo) {
  const { config } = useContext<any>(ConfigProvider);
  const { lang } = useContext<any>(LanguageProvider);
  return (
    <Container>
      <div className="container d-flex flex-column flex-md-row  align-items-md-center justify-content-md-between flex-sm-column align-items-sm-center align-items-center">
        {config?.logo && <Link href={`${process.env.NEXT_PUBLIC_HOME_URL}`}><Image
          src={config?.logo}
          alt={config?.site_name}
          width={120}
          height={34}
        /></Link>}       

        {config?.copyright && config?.copyright[lang?.key.replace("-","_") || 'pt_br'] && <Copyright>{config?.copyright[lang?.key.replace("-","_") || 'pt_br']}</Copyright>}
      </div>
    </Container>
  );
}
