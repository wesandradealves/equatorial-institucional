"use client"
import './footer.scss';
import Brand from './brand/brand';
import Links from './links/links';
import Contact from './contact/contact';
import { HttpService } from '@/services';
import { useEffect, useState } from 'react';

export default async function Footer() {
  const http = new HttpService();
  const [footerData, setFooterData] = useState<FooterTypo[]>([])

  const getFooter = async() => {
    const footer:FooterTypo[] = await http.get('/api/footer')
    setFooterData(footer);
    // const config:ConfigTypo[] = await http.get('/api/config')
    // const navigation:NavTypo[] = await http.get('/api/menu_items/location')
    // setConfig(config);
    // setNavigation(navigation);
  }  

  useEffect(() => {
    getFooter()
}, []);

  return (
    <footer>
      <Links/>
      <Contact/>
      <Brand/>
    </footer>
  );
};