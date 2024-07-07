'use client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ConfigProvider from '@/context/store';
import { ConfigTypo } from '@/types/enums';
import { useEffect, useState } from 'react';
import { HttpService } from '@/services';
import { ThemeProvider } from 'styled-components';

import "@/globals.scss";
import { GlobalStyle } from './(home)/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const http = new HttpService();
  const [config, setConfig] = useState<ConfigTypo | any>(null);
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!@/assets/variables.scss');

  const fetchData = async() => {
    const config:ConfigTypo[] = await http.get('/api/config')
    setConfig(config?.data);
  }  

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <HelmetProvider>                        
            <ConfigProvider.Provider value={{config, setConfig}}>  
            <>{children}</>
            </ConfigProvider.Provider>
          </HelmetProvider>
          <GlobalStyle />
        </ThemeProvider>             
      </body>
    </html>
  )
}