import { Container, HeaderBottom, Logo, Hamburger } from "./style";
import Topbar from "@/components/Topbar/Topbar";
import ConfigProvider from "@/context/config";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import NavigationProvider from "@/components/Footer/context";
import Navigation from "@/components/Header/Navigation";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const { config } = useContext<any>(ConfigProvider);
  const [scrollPosition, setScrollPosition] = useState<any>(typeof window !== "undefined" ? window?.scrollY : null);
  const classNames = require('classnames');
  const { navigation } = useContext<any>(NavigationProvider);

  const [isExpanded, expandMenu] = useState<boolean>(false);  

  const handleScroll = () => {
    setScrollPosition(window?.scrollY);
  };  

  useEffect(() => {
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
      <Topbar is_scrolling={scrollPosition > 0 ? 1 : 0} />
      <HeaderBottom is_scrolling={scrollPosition > 0 ? 1 : 0}>
        <div className="container d-flex justify-content-center align-items-center justify-content-lg-between">
          <SearchIcon className="search-icon d-flex d-lg-none" />         
          {config?.logo && <Logo className="d-flex justify-content-center" href="/institucional">
            <Image
              src={config?.logo}
              alt={config?.site_name}
              width={151}
              height={33}
            />          
          </Logo>}     
          {navigation && 
            <>
              <Navigation className="d-none d-lg-block" data={navigation} />
              <Hamburger className="d-flex d-lg-none align-items-center justify-content-center">
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
        </div>
      </HeaderBottom>
    </Container>
  );
};