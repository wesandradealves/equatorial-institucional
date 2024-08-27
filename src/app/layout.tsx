'use client'
import ConfigProvider from '@/context/config';
import LanguageProvider from '@/components/LanguageSwitcher/context';
import NavigationProvider from '@/components/Footer/context';
import { ConfigTypo, LanguagesTypo, NavigationTypo } from '@/types/enums';
import { Suspense, useEffect, useState } from 'react';
import { HttpService } from '@/services';
import { ThemeProvider } from 'styled-components';

import "@/assets/scss/globals.scss";
import "@/../hamburgers/_sass/hamburgers/hamburgers.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyle } from './(home)/style';

// const http = new HttpService();

// export const fetchData = async($url: any) => {
//   const response:any = await http.get($url);
//   return response;
// }  

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

  useEffect(() => {
    Promise.all(['/api/config', '/api/footer'].map(function(url: any) {
      return http.get(`${url}`);
    })).then((response: any) => {
      setConfig({
        ...response[0]?.data,
        clara_img: response[1]?.data?.contact?.talktoclara?.img
      })      
    });    
  }, []);  

  // useEffect(() => {
  //   if(theme) console.log(theme)
  // }, [theme]);   

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>  
        <ThemeProvider theme={theme}>
            <ConfigProvider.Provider value={{config, setConfig}}> 
              <LanguageProvider.Provider value={{lang, setLanguage}}>
                <NavigationProvider.Provider value={{navigation, setNavigation}}> 
                  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                </NavigationProvider.Provider>
              </LanguageProvider.Provider>   
            </ConfigProvider.Provider>
          <GlobalStyle/>
        </ThemeProvider>  
      </body>
    </html>
  )
}

