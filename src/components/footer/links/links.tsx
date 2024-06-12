"use client";
import Link from "next/link";
import "./links.scss";
import Image from "next/image";
import Collapse from "@/components/ui/inputs/Collapse";

export default function Links() {
  const linksConsumoTarifas = [
    { id: 0, name: "Cobrança de ICMS", href: "/" },
    { id: 1, name: "Bandeiras tarifárias", href: "/" },
    { id: 2, name: "Consumo na tarifa branca", href: "/" },
    { id: 3, name: "Valores de tarifas e serviços", href: "/" },
    { id: 4, name: "Tarifa social de baixa renda", href: "/" },
    { id: 5, name: "Contribuição de iluminação pública", href: "/" },
  ];

  const linksDicasInstrucoes = [
    { id: 1, name: "Como ler a conta de luz", href: "/" },
    { id: 2, name: "Como ler o medidor", href: "/" },
    { id: 3, name: "Economia de energia", href: "/" },
    { id: 4, name: "Dicas de segurança", href: "/" },
  ];

  const linksApoio = [
    { id: 1, name: "Perguntas frequentes", href: "/" },
    { id: 2, name: "Glossário", href: "/" },
    { id: 3, name: "Sala de imprensa", href: "/" },
    { id: 4, name: "Acessibilidade", href: "/" },
    { id: 5, name: "Política de privacidade", href: "/" },
  ];

  const linksSocial = [
    { id: 1, image: "images/facebook.svg", href: "https://facebook.com" },
    { id: 2, image: "images/x-social.svg", href: "https://x.com" },
    { id: 3, image: "images/instagram.svg", href: "https://instagram.com" },
    { id: 4, image: "images/youtube.svg", href: "https://youtube.com" },
    { id: 5, image: "images/linkedin.svg", href: "https://linkedin.com" },
  ];

  const badges = [
    {
      id: 1,
      image: "/images/badge-googleplay.png",
      href: "https://linkedin.com",
    },
    {
      id: 2,
      image: "/images/bagde-appstore.png",
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="links">
      <div className="ulli">
        <h6>Consumo e tarifas</h6>
        <ul>
          {linksConsumoTarifas.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="collapse">
        <Collapse
          title={"Consumo e tarifas"}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
          backgroundColor="#040F6D"
          children={
            <ul>
              {linksConsumoTarifas.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          }
          box={false}
        ></Collapse>
      </div>

      <div className="ulli">
        <h6>Dicas e instruções</h6>
        <ul>
          {linksDicasInstrucoes.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="collapse">
        <Collapse
          title={"Dicas e instruções"}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
          backgroundColor="#040F6D"
          children={
            <ul>
              {linksDicasInstrucoes.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          }
          box={false}
        ></Collapse>
      </div>

      <div className="ulli">
        <h6>Links de apoio</h6>
        <ul>
          {linksApoio.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="collapse">
        <Collapse
          title={"Links de apoio"}
          textColor="#FFFFFF"
          iconColor="#FFFFFF"
          backgroundColor="#040F6D"
          children={
            <ul>
              {linksApoio.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          }
          box={false}
        ></Collapse>
      </div>

      <div>
        <div>
          <h6 className="redes-socias-title">
            Fale com a Equatorial nas redes sociais
          </h6>
          <div className="redes-socias-links">
            {linksSocial.map((link) => {
              return (
                <Link passHref href={link.href} key={link.id}>
                  <Image
                    priority
                    src={link.image}
                    alt=""
                    width={32}
                    height={32}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h6 className="redes-socias-title">Baixe nosso app</h6>
          <div className="badges">
            {badges.map((badge) => {
              return (
                <Link passHref href={badge.href} key={badge.id}>
                  <Image
                    priority
                    src={badge.image}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "40px" }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
