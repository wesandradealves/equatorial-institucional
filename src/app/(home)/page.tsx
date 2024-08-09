"use client";
import {Wrapper, Content, Inner, Logo, Navigation, NavTitle, ListNav, NavItem, NavLink, Nav} from "./style";
import ConfigProvider from "@/context/config";
import { useContext, useEffect, useState } from "react";
import { HttpService } from "@/services";
import { NavTypo } from "@/types/enums";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "../layout";

export default function Select() {
  const { config } = useContext<any>(ConfigProvider);
  const [navigation, setNavigation] = useState<NavTypo[]>([]);

  useEffect(() => {
    fetchData('/api/menu_items/location').then((response: any) => {
      if(response) setNavigation(response);
    }).catch(console.error);   
  }, []);

  return (
    <Wrapper>
      {config && navigation && <>
        <Content background_image={config?.location_screen_bg}>
          <title>{`${config?.site_name} - Escolha seu estado`}</title>
          <Inner>
            <Logo>
              <Link href={`${process.env.NEXT_PUBLIC_HOME_URL}`}>
                <Image
                  src={config?.logo}
                  alt={config?.site_name}
                  width={234}
                  height={83}
                />
              </Link>
            </Logo>
            <Navigation className='container d-flex flex-wrap gap-2'>
                <NavTitle className='col-1 col-sm-12'>Escolha seu<br/><b>Estado:</b></NavTitle>
                <ListNav className='d-flex flex-column col-lg-8 align-items-md-center align-items-lg-start'>
                  <Nav className='d-flex flex-column align-items-center'>
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
                  </Nav>
                </ListNav>
            </Navigation>
          </Inner>
        </Content>
      </>}
    </Wrapper>
  )
}
