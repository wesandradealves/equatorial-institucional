"use client";
import { HttpService } from "@/services";
import { useContext, useEffect, useState } from "react";
import ConfigProvider from "@/context/store";
import { Container, Contact, ColText, ContactCol, Anchor } from './style';
import Brand from "../brand/brand";
import { NavigationTypo, FooterData } from "@/types/enums";

export default function Footer() {
  const http = new HttpService();

  const { config } = useContext<any>(ConfigProvider);
  const [footerData, setFooterData] = useState<FooterData>();
  const [navigation, setNavigation] = useState<NavigationTypo[]>([]);

  const getFooter = async () => {
    const footer: FooterData = await http.get("/api/footer");
    const navigation: NavigationTypo[] = await http.get(
      "/api/menu_items/rodape"
    );
    setFooterData(footer);
    setNavigation(navigation);
  };

  useEffect(() => {
    getFooter();
  }, []);

  const handleContactInfo = (o: any) => {
    return (Object.keys(o).map(function(key){
      return (<ContactCol className={`flex-fill ${key}`}>
        <span className="inner d-flex flex-wrap">
          <span className="flex-fill">
            <ColText dangerouslySetInnerHTML={{ __html: o[key]?.pt_br}}></ColText>
            {o[key]?.link && o[key]?.link?.url && <ColText>
              <Anchor href={o[key]?.link?.url}>{o[key]?.link?.label?.pt_br}</Anchor>
            </ColText>}
          </span>
          {o[key]?.img && <img alt={o[key]?.pt_br} src={o[key]?.img} />}          
        </span>
      </ContactCol>);
    }));   
  };

  return (
    <Container>
      {footerData && footerData?.data?.contact && <Contact>
        <div className="container d-flex flex-column flex-lg-row align-items-stretch">
          <>{handleContactInfo(footerData?.data?.contact)}</>
        </div>
      </Contact>} 

      {config && (
        <Brand data={config} />
      )} 
    </Container>
  );
}
