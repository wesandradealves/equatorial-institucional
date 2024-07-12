"use client";

import { Container, HeaderBottom, Logo, Hamburger } from "./style";
import Topbar from "@/components/Topbar/Topbar";
import ConfigProvider from "@/context/config";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import NavigationProvider from "@/components/Footer/context";
import Navigation from "@/components/Header/Navigation";
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "@/components/SearchBar/SearchBar";
import { HeaderTypo, NavigationTypo } from "@/types/enums";
import { HttpService } from "@/services";

export default function Header() {
  const http = new HttpService();
  const { config } = useContext<any>(ConfigProvider);
  const [scrollPosition, setScrollPosition] = useState<any>(typeof window !== "undefined" ? window?.scrollY : null);
  const classNames = require('classnames');

  // const { navigation } = useContext<any>(NavigationProvider);
  const [navigation, setNavigation] = useState<NavigationTypo | any>(null);

  const [data, setData] = useState<HeaderTypo | any>(null);

  const [isExpanded, expandMenu] = useState<boolean>(false);  

  const handleScroll = () => {
    setScrollPosition(window?.scrollY);
  };  

  const fetchNavigation = async () => {
    const navigation: NavigationTypo[] = await http.get(
      "/api/menu_items/main"
    );
    setNavigation(navigation);
  };

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!data) {
      fetchData('/api/header').then((response: HeaderTypo | any) => {
        if(response) setData(response?.data)
      }).catch(console.error);
    }    
    if(!navigation) fetchNavigation()
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);    
  }, []);

  return (
    <Container className={
      classNames(
        'header',
        {
          'sticky': scrollPosition
        }
      )      
    }>
      {data && <Topbar data={data} is_scrolling={scrollPosition > 0 ? 1 : 0} />}

      {config && navigation && <HeaderBottom is_scrolling={scrollPosition > 0 ? 1 : 0}>
        <div className="container d-flex justify-content-center align-items-center justify-content-xxl-between">
          <SearchIcon className="search-icon d-flex d-xxl-none" />         
          {config?.logo && <Logo className="d-flex justify-content-center" href={process.env.NEXT_PUBLIC_HOME_URL}>
            <Image
              src={config?.logo}
              alt={config?.site_name}
              width={151}
              height={33}
            />          
          </Logo>}     
          {navigation && 
            <>
              <Navigation className="d-none d-xxl-block" data={navigation} />
              <Hamburger className="d-flex d-xxl-none align-items-center justify-content-center">
                <button onClick={(e: any) => {
                  expandMenu(!isExpanded)
                }} 
                className={
                  classNames(
                    'hamburger hamburger--elastic',
                    {
                      'is-active': isExpanded
                    }
                  )      
                }
                type="button" aria-label="Menu" aria-controls="navigation">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </Hamburger>
            </>
          }
          <SearchBar data={data?.searchbar} className="d-none d-xxl-flex" />
        </div>
      </HeaderBottom>}
    </Container>
  );
};