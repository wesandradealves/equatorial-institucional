"use client"; // This is a client component 👈🏽

import { Helmet } from 'react-helmet';
import Brand from '@/components/footer/brand/brand';
import { Wrapper, ListNav, Navigation, NavItem, NavTitle, Logo, NavLink, Content, Footer, Inner, GlobalStyle, Spinner, Loader } from '@/assets/styles';
import { useEffect, useState } from 'react';
import { ConfigTypo, NavTypo } from '@/types/enums';
import { HttpService } from '@/services';
import Image from "next/image";

export default function Splash() {
  const http = new HttpService();
  const [config, setConfig] = useState<ConfigTypo[]>([]);
  const [navigation, setNavigation] = useState<NavTypo[]>([]);
  const [isInit, setReady] = useState(false);

  const fetchData = async() => {
    const config:ConfigTypo[] = await http.get('/api/config')
    const navigation:NavTypo[] = await http.get('/api/menu_items/location')
    setConfig(config);
    setNavigation(navigation);
  }  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(config.hasOwnProperty("data")) setReady(true);
  }, [config]);  

  return (
    <>
      <Wrapper>
        {config.hasOwnProperty("data") && <>
          <Content backgroundImage={config?.data?.basePath + config?.data?.location_screen_bg}>
            <Helmet>
              <title>{`${config?.data?.site_name ? config?.data?.site_name : '-'} - Escolha seu estado`}</title>
              <meta property="og:title" content={`${config?.data?.site_name ? config?.data?.site_name : '-'} - Escolha seu estado`} />
              <meta name="twitter:title" content={`${config?.data?.site_name ? config?.data?.site_name : '-'} - Escolha seu estado`} />
            </Helmet>   
            <Inner>
              <Logo>
                <Image
                  src={config?.data?.basePath + config?.data?.logo}
                  alt={config?.data?.site_name}
                  width={234}
                  height={83}
                />
              </Logo>
              <Navigation>
                  <NavTitle>Escolha seu<br/>Estado:</NavTitle>
                  <ListNav>
                    {navigation.map(function(row, i){
                        return (
                          <NavItem key={i}>
                            <NavLink title={row?.description} href={row?.uri}>
                              {row?.title}
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M10 7L15 12L10 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </NavLink>
                          </NavItem>
                        );
                    })}
                  </ListNav>
              </Navigation>
            </Inner>
          </Content>
          <Footer>
            <Brand data={config?.data} />  
          </Footer>          
        </>}
      </Wrapper>
      <GlobalStyle />
    </>
  )
}