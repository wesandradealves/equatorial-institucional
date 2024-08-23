"use client";

import {Container, HeaderBottom, Logo, Hamburger, Content } from "./style";
import Topbar from "@/components/Topbar/Topbar";
import ConfigProvider from "@/context/config";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "@/components/SearchBar/SearchBar";
import { HeaderTypo, NavigationTypo } from "@/types/enums";
import { HttpService } from "@/services";
import MobileNavigation from "../Navigation/MobileNavigation";

const http = new HttpService();

export const getMedia = async (data: any) => {
  let results: any = await Promise.all(data.map(async (item: any): Promise<any> => {
    if(item?.field_icone) {
      const field_icone: any = await http.get(`/api/media/?fid=${item?.field_icone[0]?.file_id}`);
  
      return {
        ...item,
        field_icone: `${field_icone}`
      }
    }

    return item;
  }));   

  return results;  
}; 

export default function Header() {
  const { config } = useContext<any>(ConfigProvider);

  const [scrollPosition, setScrollPosition] = useState<any>(typeof window !== "undefined" ? window?.scrollY : null);
  const classNames = require('classnames');

  const [navigation, setNavigation] = useState<NavigationTypo | any>(null);

  const [data, setData] = useState<HeaderTypo | any>(null);

  const [isExpanded, expandMenu] = useState<boolean>(false);  

  const handleScroll = () => {
    setScrollPosition(window?.scrollY);
  };  

  useEffect(() => {
    Promise.all(["/api/header", "/api/menu_items/main"].map(function(url: any) {
      return http.get(`${url}`);
    })).then((response: any) => {
      setData(response[0]?.data)

      getMedia(response[1]).then((response: any) => {
        if(response) setNavigation(response)
      }) 
    }).catch(console.error); 

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);    
  }, []);

  useEffect(() => {
    console.log(navigation)
  }, [navigation]);

  return (
    <>
      <Container id="header" data-component="Header" className={
        classNames(
          'header',
          {
            'sticky': scrollPosition,
            'expanded': isExpanded
          }
        )      
      }>
        {data && <Topbar data={data} is_scrolling={scrollPosition > 0 ? 1 : 0} />}

        {config && navigation && <HeaderBottom is_scrolling={scrollPosition > 0 ? 1 : 0}>
          <Content className="container d-flex justify-content-center align-items-center justify-content-xxl-between" is_scrolling={scrollPosition}>
            <SearchIcon 
            onClick={(e: any) => {
              expandMenu(!isExpanded)
            }}
            className={
              classNames(
                'search-icon d-flex d-xxl-none',
                {
                  'opacity-0': isExpanded
                }
              )
            } />         
            {config?.logo && <Logo 
            className={
              classNames(
                'd-flex justify-content-center',
                {
                  'opacity-0': isExpanded
                }
              )
            }
            href={process.env.NEXT_PUBLIC_HOME_URL}>
              <Image
                src={config?.logo}
                alt={config?.site_name}
                width={150}
                height={42}
              />
            </Logo>}     
            {navigation &&
              <>
                <Navigation classMenuName="flex-auto" className="d-none d-xxl-flex align-items-center justify-content-center" data={navigation} />
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
          </Content>
        </HeaderBottom>}
      </Container>

      <MobileNavigation 
      className={
        classNames(
          {
            'is-visible': isExpanded
          }
        )
      }      
      data={navigation} search={data?.searchbar}  />
    </>
  );
};
