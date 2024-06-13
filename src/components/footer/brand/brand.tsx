import "./brand.scss";
import Image from "next/image";

export default function Brand() {
  return (
    <div className="brand">
      <div className="logo">
        <Image
          src={"/images/logo-equatorial.png"}
          alt={"Logo"}
          width={120}
          height={34}
        />
      </div>
      <div className="copyright">
        <p>Equatorial © 2024. Todos os direiros reservados</p>
      </div>
    </div>
  );
}
