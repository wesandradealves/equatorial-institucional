import "@/globals.scss";
import Image from "next/image";
import { ConfigTypo } from '@/types/enums';
import { Container, Copyright } from './style';

export default function Brand(props: ConfigTypo) {
  return (
    <Container>
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
        {props?.data?.logo && <Image
          src={props?.data?.basePath + props?.data?.logo}
          alt={props?.data?.site_name}
          width={120}
          height={34}
        />}       

        {props?.data?.copyright && props?.data?.copyright?.pt_br && <Copyright>{props?.data?.copyright?.pt_br}</Copyright>} 
      </div>
    </Container>
  );
}
