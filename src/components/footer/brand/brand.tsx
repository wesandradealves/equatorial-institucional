import "./brand.scss";
import Image from "next/image";
import { ConfigTypo } from '@/types/enums';
export default function Brand(props: ConfigTypo) {
  return (
    <div className="brand">
      <div className="logo">
        <Image
          src={props?.data?.basePath + props?.data?.logo}
          alt={props?.data?.site_name}
          width={120}
          height={34}
        />
      </div>
      <div className="copyright">
        <p>{props?.data?.copyright?.pt_br}</p>
      </div>
    </div>
  );
}
