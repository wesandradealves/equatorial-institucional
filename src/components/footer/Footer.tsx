"use client";
import "./footer.scss";
import Brand from "./brand/brand";
import Links from "./links/links";
import Contact from "./contact/contact";
import { HttpService } from "@/services";
import { useEffect, useState } from "react";
import { FooterData } from "./types/footer_typo";
import { NavigationTypo } from "./types/navigation_typo";

export default function Footer() {
  const http = new HttpService();
  const [footerData, setFooterData] = useState<FooterData>();
  const [navigation, setNavigation] = useState<NavigationTypo[]>([]);

  const getFooter = async () => {
    const footer: FooterData = await http.get("/api/footer");
    const navigation: NavigationTypo[] = await http.get(
      "/api/menu_items/rodape"
    );
    setFooterData(footer);
    setNavigation(navigation);
  };

  useEffect(() => {
    getFooter();
  }, []);

  return (
    <footer>
      <Links socialNetworks={footerData?.data.social_networks} store={footerData?.data.store} navigation={navigation}/>
      <Contact contact={footerData?.data.contact}/>
      {/* <Brand /> */}
    </footer>
  );
}
