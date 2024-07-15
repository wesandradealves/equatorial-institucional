"use client";
import { Wrapper, Content, Inner, Logo, Navigation, NavTitle, ListNav, NavItem, NavLink} from "./style";
import ConfigProvider from "@/context/config";
import { useContext, useEffect, useState } from "react";
import { HttpService } from "@/services";
import { NavTypo } from "@/types/enums";

export default function Select() {
  const http = new HttpService();
  const { config } = useContext<any>(ConfigProvider);
  const [navigation, setNavigation] = useState<NavTypo[]>([]);

  const fetchData = async() => {
    const navigation:NavTypo[] = await http.get('/api/menu_items/location')
    setNavigation(navigation);
  }  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      {config && <>
        <Content background_image={config?.location_screen_bg}>
          <title>{`${config?.site_name} - Escolha seu estado`}</title>
          <Inner>
            <Logo>
              <img
                src={config?.logo}
                alt={config?.site_name}
                width={234}
                height={83}
              />
            </Logo>
            <Navigation>
                <NavTitle>Escolha seu<br/>Estado:</NavTitle>
                <ListNav>
                  {navigation.map(function(row:any, i:number){
                      return (
                        <NavItem key={i}>
                          <NavLink title={row?.description} href={row?.uri}>
                            {row?.title}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </NavLink>
                        </NavItem>
                      );
                  })}
                </ListNav>
            </Navigation>
          </Inner>
        </Content>
      </>}
    </Wrapper>
  )
}