"use client";
import { HttpService } from "@/services";
import { useContext, useEffect, useState } from "react";
import ConfigProvider from "@/context/store";
import { Container, Contact, ColText, ContactCol, Anchor, FooterTop, Nav, SocialNetworks, SocialItem, SocialLink, Label, Apps } from './style';
import { NavigationTypo, FooterData } from "@/types/enums";
import { NavColumn } from "./NavCol";

export default function Footer() {
  const http = new HttpService();

  const { config } = useContext<any>(ConfigProvider);
  const [footerData, setFooterData] = useState<FooterData[] | any>(null);
  const [navigation, setNavigation] = useState<NavigationTypo[] | any>(null);
  const [dimensions, setWindowDimensions] = useState<any>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };  

  useEffect(() => {
    getFooter();
    getNavigation();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);    
  }, []);

  const handlePhones = (o: any) => {
    return o.map(function(text: any){
      return text.split("<b>").map(function(text: any, index: number){
        if(index == 1) return `<span>
          <span>
            <svg class='d-inline-block d-lg-none' width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.58072 4.21739C9.38064 4.35145 10.1073 4.72926 10.6874 5.30817C11.2675 5.88708 11.643 6.61224 11.7804 7.41053M8.70286 1.6001C10.1256 1.8408 11.4232 2.51417 12.4552 3.54097C13.4871 4.57082 14.1588 5.86575 14.4 7.2856M13.2886 12.9345C13.2886 12.9345 12.5162 13.6932 12.3269 13.9156C12.0185 14.2447 11.6552 14.4001 11.1789 14.4001C11.1331 14.4001 11.0843 14.4001 11.0385 14.397C10.1317 14.3392 9.28904 13.9857 8.65704 13.6841C6.92897 12.8492 5.41156 11.664 4.15062 10.1619C3.1095 8.90959 2.41339 7.75177 1.95236 6.50864C1.66842 5.74997 1.56462 5.15887 1.61041 4.60129C1.64095 4.2448 1.77834 3.94925 2.03175 3.69636L3.07286 2.65737C3.22247 2.51721 3.38123 2.44104 3.53694 2.44104C3.72929 2.44104 3.885 2.55682 3.9827 2.65432C3.98575 2.65737 3.9888 2.66042 3.99186 2.66346C4.1781 2.83713 4.35518 3.0169 4.54142 3.20886C4.63607 3.30636 4.73377 3.40386 4.83147 3.5044L5.66497 4.33621C5.9886 4.65918 5.9886 4.95777 5.66497 5.28074C5.57643 5.3691 5.49094 5.45746 5.4024 5.54278C5.14594 5.80481 5.34741 5.60375 5.08178 5.84141C5.07568 5.8475 5.06957 5.85055 5.06652 5.85665C4.80395 6.11868 4.8528 6.37462 4.90775 6.54829C4.91081 6.55743 4.91386 6.56657 4.91691 6.57571C5.13369 7.09978 5.439 7.59337 5.90308 8.18142L5.90613 8.18447C6.74879 9.22042 7.63725 10.0278 8.61731 10.6464C8.74249 10.7256 8.87072 10.7896 8.99284 10.8505C9.10276 10.9053 9.20656 10.9571 9.2951 11.012C9.30732 11.0181 9.31953 11.0272 9.33174 11.0333C9.43555 11.0851 9.53325 11.1095 9.634 11.1095C9.88741 11.1095 10.0462 10.9511 10.0981 10.8993L10.6965 10.302C10.8003 10.1984 10.9652 10.0735 11.1576 10.0735C11.3468 10.0735 11.5026 10.1923 11.5972 10.2959C11.6003 10.299 11.6003 10.299 11.6033 10.302L13.2856 11.9809C13.6001 12.2916 13.2886 12.9345 13.2886 12.9345Z' stroke='#0414A1' strokeLineCap='round' strokeLineJoin='round'/></svg> 
            <b>${text.replace("</b>", "")}</b>
          </span>
        </span>`
        return `<span>${text.replace("</b>", "")}</span>`;
      }).join("</span>");
    }).join("\r\n\r\n");   
  };  

  const handleContactInfo = (o: any) => {
    return (Object.keys(o).map(function(key, i){
      return (<ContactCol key={i} className={`flex-fill ${key}`}>
        <span className="inner d-flex flex-wrap">
          <span className="flex-fill">
            {dimensions.width <= 992 ? 
              <ColText dangerouslySetInnerHTML={{ __html: handlePhones(o[key]?.pt_br.split('\r\n')) }}></ColText> : 
              <ColText dangerouslySetInnerHTML={{ __html: o[key]?.pt_br }}></ColText>
            }

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

              {footerData?.data?.store && footerData?.data?.store?.links && <Apps className="d-flex flex-row flex-wrap">
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
    </Container>
  );
}
