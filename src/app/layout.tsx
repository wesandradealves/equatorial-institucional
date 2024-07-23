'use client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ConfigProvider from '@/context/config';
import LanguageProvider from '@/components/LanguageSwitcher/context';
import NavigationProvider from '@/components/Footer/context';
import { ConfigTypo, LanguagesTypo, NavigationTypo } from '@/types/enums';
import { useEffect, useState } from 'react';
import { HttpService } from '@/services';
import { ThemeProvider } from 'styled-components';
import { usePathname, redirect } from 'next/navigation';

import "@/assets/scss/globals.scss";
import "@/../hamburgers/_sass/hamburgers/hamburgers.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyle } from './(home)/style';
import Spinner from '@/components/Spinner/Spinner';
import SpinnerProvider from '@/components/Spinner/context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const http = new HttpService();
  const [config, setConfig] = useState<ConfigTypo | any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [lang, setLanguage] = useState<LanguagesTypo | any>(null);
  const [navigation, setNavigation] = useState<NavigationTypo | any>(null);
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!@/assets/scss/variables.scss');
  const [ , , subdomain] = typeof window !== "undefined" ? window.location.hostname.split(".").reverse() : [];
  const pathname = usePathname();

  const fetchData = async() => {
    const config:ConfigTypo = await http.get('/api/config')
    if(config) setConfig(config?.data)
  }  

  useEffect(() => {
    fetchData();
  }, []);  

  // useEffect(() => {
  //   if(theme) console.log(theme)
  // }, [theme]);   

  useEffect(() => {
    console.log(process.env) 
  }, []);   
  
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <SpinnerProvider.Provider value={{loading, setLoading}}>
            <Spinner loading={loading} />
            <ConfigProvider.Provider value={{config, setConfig}}> 
              <HelmetProvider>                     
                <LanguageProvider.Provider value={{lang, setLanguage}}>
                  <NavigationProvider.Provider value={{navigation, setNavigation}}> 
                    <>{children}</>
                  </NavigationProvider.Provider>
                </LanguageProvider.Provider>   
              </HelmetProvider>
            </ConfigProvider.Provider>
          </SpinnerProvider.Provider>
          <GlobalStyle/>
        </ThemeProvider>     
      </body>
    </html>
  )
}
