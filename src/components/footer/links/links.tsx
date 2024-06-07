"use client";
import Link from "next/link";
import "./links.scss";
import Image from "next/image";

export default function Links() {
  const linksConsumoTarifas = [
    { name: "Cobrança de ICMS", href: "/" },
    { name: "Bandeiras tarifárias", href: "/" },
    { name: "Consumo na tarifa branca", href: "/" },
    { name: "Valores de tarifas e serviços", href: "/" },
    { name: "Tarifa social de baixa renda", href: "/" },
    { name: "Contribuição de iluminação pública", href: "/" },
  ];

  const linksDicasInstrucoes = [
    { name: "Como ler a conta de luz", href: "/" },
    { name: "Como ler o medidor", href: "/" },
    { name: "Economia de energia", href: "/" },
    { name: "Dicas de segurança", href: "/" },
  ];

  const linksApoio = [
    { name: "Perguntas frequentes", href: "/" },
    { name: "Glossário", href: "/" },
    { name: "Sala de imprensa", href: "/" },
    { name: "Acessibilidade", href: "/" },
    { name: "Política de privacidade", href: "/" },
  ];

  const linksSocial = [
    { image: "images/facebook.svg", href: "https://facebook.com" },
    { image: "images/x-social.svg", href: "https://x.com" },
    { image: "images/instagram.svg", href: "https://instagram.com" },
    { image: "images/youtube.svg", href: "https://youtube.com" },
    { image: "images/linkedin.svg", href: "https://linkedin.com" },
  ];

  const badges = [
    { image: "/images/badge-googleplay.png", href: "https://linkedin.com" },
    { image: "/images/bagde-appstore.png", href: "https://linkedin.com" },
  ];

  return (
    <div className="links">
      <div>
        <h6>Consumo e tarifas</h6>
        <ul>
          {linksConsumoTarifas.map((link) => {
            return (
              <li>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h6>Dicas e instruções</h6>
        <ul>
          {linksDicasInstrucoes.map((link) => {
            return (
              <li>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h6>Links de apoio</h6>
        <ul>
          {linksApoio.map((link) => {
            return (
              <li>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h6 className="redes-socias-title">
          Fale com a Equatorial nas redes sociais
        </h6>
        <div className="redes-socias-links">
          {linksSocial.map((link) => {
            return (
              <Link passHref href={link.href}>
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
        <h6 className="redes-socias-title">Baixe nosso app</h6>
        <div className="badges">
          {badges.map((badge) => {
            return (
              <Link passHref href={badge.href}>
                <Image
                  priority
                  src={badge.image}
                  alt=""
                  width={0}
                  height={0}
                  // layout="fill"
                  sizes="100vw"
                  style={{ width: 'auto', height: '40px' }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
