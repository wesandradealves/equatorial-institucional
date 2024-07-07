'use client'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

import ConfigProvider from '@/context/store';
import { ConfigTypo } from '@/types/enums';
import { useEffect, useState } from 'react';
import { HttpService } from '@/services';
import { ThemeProvider } from 'styled-components';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const http = new HttpService();
  const [config, setConfig] = useState<ConfigTypo | any>(null);
  const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../assets/variables.scss');

  const fetchData = async() => {
    const config:ConfigTypo[] = await http.get('/api/config')
    setConfig(config?.data);
  }  

  useEffect(() => {
    fetchData();
    console.log(theme);
  }, []); 
  
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <ConfigProvider.Provider value={{config, setConfig}}>     
          <Helmet>
            <title>Equatorial Energia - Página Inicial</title>
            <meta name="description" content="This is a description of my page" />
            <meta property="og:title" content="Equatorial Energia - Página Inicial" />
            <meta property="og:description" content="This is a description of my page" />
            <meta name="twitter:title" content="Equatorial Energia - Página Inicial" />
            <meta name="twitter:description" content="This is a description of my page" />
          </Helmet>              
          <div id="wrap" className={`vh-100 d-flex flex-column ${inter.className}`}>
            {/* <Header /> */}
            <main className="flex-fill">
              {children}
            </main>
            <Footer />
          </div>
        </ConfigProvider.Provider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
