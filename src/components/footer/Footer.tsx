"use client";
import { HttpService } from "@/services";
import { useContext, useEffect, useState } from "react";
import ConfigProvider from "@/context/store";
import { Container, Contact, ColText, ContactCol, Anchor, FooterTop, Nav, SocialNetworks, SocialItem, SocialLink, Label, Apps } from './style';
import Brand from "../brand/brand";
import { NavigationTypo, FooterData } from "@/types/enums";
import { NavColumn } from "./NavCol";

export default function Footer() {
  const http = new HttpService();

  const { config } = useContext<any>(ConfigProvider);
  const [footerData, setFooterData] = useState<FooterData[] | any>(null);
  const [navigation, setNavigation] = useState<NavigationTypo[] | any>(null);

  const getFooter = async () => {
    const footer: FooterData = await http.get("/api/footer");
    setFooterData(footer);
  };

  const getNavigation = async () => {
    const navigation: NavigationTypo[] = await http.get(
      "/api/menu_items/rodape"
    );
    setNavigation(navigation);
  };  

  useEffect(() => {
    getFooter();
    getNavigation();
  }, []);

  const handleContactInfo = (o: any) => {
    return (Object.keys(o).map(function(key, i){
      return (<ContactCol key={i} className={`flex-fill ${key}`}>
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

  const handleSocialLinks = (o: any) => {
    return (Object.keys(o).map(function(key, i){
      return (<SocialItem key={i} className={`${key}`}>
        <SocialLink href={o[key]} className={`fa-brands fa-${key == 'twitter' ? `x-${key}` : key}`} />
      </SocialItem>);
    }));   
  };

  const handleAppStore = (o: any) => {
    return (Object.keys(o).map(function(key, i){
      return (<div key={i} className={`${key}`}>
        <a href={o[key].url}><img src={o[key].img} /></a>
      </div>);
    }));   
  };  

  return (
    <Container>
      {footerData && navigation && <FooterTop>
        <div className="container d-flex flex-column flex-lg-row flex-wrap align-items-stretch">
          {navigation && <Nav className="flex-fill d-flex flex-column flex-lg-row flex-wrap align-items-stretch">
            {navigation.map(function(row: any, i: number){
              return <NavColumn key={i} props={row} />;
            })}
          </Nav>}
          {footerData && (footerData?.data?.store || footerData?.data?.social_networks) && <>
            <div>
              {footerData?.data?.social_networks && footerData?.data?.social_networks?.links && <div className="mb-5">
                {footerData?.data?.social_networks?.label && <Label className="mb-3">
                    {footerData?.data?.social_networks?.label?.pt_br}
                </Label>}
                <SocialNetworks className="d-flex align-items-center">
                  {handleSocialLinks(footerData?.data?.social_networks?.links)}
                </SocialNetworks>              
              </div>}

              {footerData?.data?.store && footerData?.data?.store?.links && <Apps className="d-flex flex-column flex-lg-row flex-wrap">
                {footerData?.data?.store?.label && <Label className="mb-3 col-12">
                    {footerData?.data?.store?.label?.pt_br}
                </Label>}
                {handleAppStore(footerData?.data?.store?.links)}
              </Apps>}
            </div>
          </>}
        </div>
      </FooterTop>}

      {footerData?.data?.contact && <Contact>
        <div className="container d-flex flex-column flex-lg-row align-items-stretch">
          {handleContactInfo(footerData?.data?.contact)}
        </div>
      </Contact>} 

      {config && (
        <Brand data={config} />
      )} 
    </Container>
  );
}
