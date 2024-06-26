"use client"
import './footer.scss';
import Brand from './brand/brand';
import Links from './links/links';
import Contact from './contact/contact';
import { HttpService } from '@/services';
import { useEffect, useState } from 'react';
import { FooterData } from './types/footer_typo';

export default function Footer() {
  const http = new HttpService();
  const [footerData, setFooterData] = useState<FooterData[]>([])

  const getFooter = async() => {
    const footer: FooterData[] = await http.get('/api/footer')
    setFooterData(footer);
  }  

  useEffect(() => {
    getFooter()
}, []);

  return (
    <footer>
      <Links data={ footerData }/>
      <Contact/>
      <Brand/>
    </footer>
  );
};

