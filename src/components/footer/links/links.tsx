"use client";
import Link from "next/link";
import "./links.scss";
import Image from "next/image";
import Collapse from "@/components/ui/inputs/Collapse";
import {
  SocialNetworksTypo,
  StoreTypo,
} from "../types/footer_typo";
import { NavigationTypo } from "../types/navigation_typo";

export interface LinksProps {
  socialNetworks?: SocialNetworksTypo;
  store?: StoreTypo;
  navigation?: NavigationTypo[];
}

export default function Links(props: LinksProps) {
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

  // const linksSocial = [
  //   { id: 1, image: "images/facebook.svg", href: "https://facebook.com" },
  //   { id: 2, image: "images/x-social.svg", href: "https://x.com" },
  //   { id: 3, image: "images/instagram.svg", href: "https://instagram.com" },
  //   { id: 4, image: "images/youtube.svg", href: "https://youtube.com" },
  //   { id: 5, image: "images/linkedin.svg", href: "https://linkedin.com" },
  // ];

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
      {props.navigation &&
        props.navigation.map((item, index) => (
          <div className="ulli" key={index}>
            <h6> {item?.title}</h6>
            <ul>
              {item.below.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.absolute}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

      {props.navigation &&
        props.navigation.map((item, index) => (
          <div className="collapse" key={index}>
            <Collapse
              key={index}
              title={item.title}
              textColor="#FFFFFF"
              iconColor="#FFFFFF"
              backgroundColor="#040F6D"
              children={
                <ul>
                  {item.below.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.absolute}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              }
              box={false}
            ></Collapse>
          </div>
        ))}

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
        {props?.socialNetworks && (
          <div>
            <h6 className="redes-socias-title">
              {props?.socialNetworks?.label.pt_br}
            </h6>
            <div className="redes-socias-links">
              <Link passHref href={props?.socialNetworks?.links.facebook}>
                <Image
                  priority
                  src={"images/facebook.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              <Link passHref href={props?.socialNetworks?.links.twitter}>
                <Image
                  priority
                  src={"images/x-social.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              <Link passHref href={props?.socialNetworks?.links.instagram}>
                <Image
                  priority
                  src={"images/instagram.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              <Link passHref href={props?.socialNetworks?.links.youtube}>
                <Image
                  priority
                  src={"images/youtube.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              <Link passHref href={"#"}>
                <Image
                  priority
                  src={"images/linkedin.svg"}
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              {/* {linksSocial.map((link) => {
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
            })} */}
            </div>
          </div>
        )}
        {props?.store && (
          <div>
            <h6 className="redes-socias-title">{props?.store?.label.pt_br}</h6>
            <div className="badges">
              {props?.store.links.appstore && (
                <div>
                  <Link passHref href={props?.store.links.appstore.url}>
                    <Image
                      priority
                      src={props?.store.links.appstore.img}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "40px" }}
                    />
                  </Link>
                </div>
              )}
              {props?.store.links.googleplay && (
                <div>
                  <Link passHref href={props?.store.links.googleplay.url}>
                    <Image
                      priority
                      src={props?.store.links.googleplay.img}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "auto", height: "40px" }}
                    />
                  </Link>
                </div>
              )}
              {/* {badges.map((badge) => {
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
                  })} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
