'use client'
import ConfigProvider from '@/context/config';
import LanguageProvider from '@/components/LanguageSwitcher/context';
import NavigationProvider from '@/components/Footer/context';
import { ConfigTypo, LanguagesTypo, NavigationTypo } from '@/types/enums';
import { Suspense, useEffect, useState } from 'react';
import { HttpService } from '@/services';
import { ThemeProvider } from 'styled-components';
import StyledJsxRegistry from "./registry";
import { AnimatePresence } from 'framer-motion';
import { _colors, _fonts, _breakpoints } from '@/assets/scss/variables';

const themeNew = {
  _fonts,
  _colors,
  _breakpoints
};

import "@/assets/scss/globals.scss";
import "@/../hamburgers/_sass/hamburgers/hamburgers.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyle } from './(home)/style';

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

  useEffect(() => {
    console.log(themeNew)
    // if(theme) console.log(theme)
  }, []);   

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>  
        <ThemeProvider theme={theme}>
            <ConfigProvider.Provider value={{config, setConfig}}> 
              <LanguageProvider.Provider value={{lang, setLanguage}}>
                <NavigationProvider.Provider value={{navigation, setNavigation}}> 
                  <Suspense fallback={<div>Loading...</div>}>
                    <StyledJsxRegistry>
                      <AnimatePresence 
                        mode="wait" 
                        initial={true}
                        onExitComplete={() => window.scrollTo(0, 0)}
                        >                      
                          {children}
                      </AnimatePresence>
                    </StyledJsxRegistry>
                  </Suspense>
                </NavigationProvider.Provider>
              </LanguageProvider.Provider>   
            </ConfigProvider.Provider>
          <GlobalStyle/>
        </ThemeProvider>  
      </body>
    </html>
  )
}

