import { useContext, useEffect, useState } from "react";
import { Container, TariffBand, Text } from "./style";
import { HttpService } from "@/services";
import { HeaderTypo } from "@/types/enums";
import AccessibilityShortcut from "./Accessibility";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import LanguageProvider from "@/components/LanguageSwitcher/context";

export default function Topbar(props: any) {
  const http = new HttpService();
  const [data, setData] = useState<HeaderTypo | any>(null);
  const { lang } = useContext<any>(LanguageProvider);
  const classNames = require('classnames');

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!data) {
      fetchData('/api/header/?v=1').then((response: HeaderTypo | any) => {
        if(response) setData(response?.data)
      }).catch(console.error);
    }
  }, []);  

  return (
    <Container 
      className={
        classNames(
          'topbar d-none d-md-block',
          {
            'd-md-none': props?.is_scrolling
          }
        )      
      }      
    >
      {data && <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <TariffBand className="d-flex align-items-center" tariff={data?.tariff_band?.band?.value}>
          {data?.tariff_band?.label[lang?.key.replace("-","_")] && data?.tariff_band?.band?.label[lang?.key.replace("-","_")] && <Text>{`${data?.tariff_band?.label[lang?.key.replace("-","_")]}: ${data?.tariff_band?.band?.label[lang?.key.replace("-","_")]}`}</Text>}
          {data?.text[lang?.key.replace("-","_")] && <Text>{data?.text[lang?.key.replace("-","_")]}</Text>}
        </TariffBand>
        <div className="d-flex align-items-center justify-content-end">
          <LanguageSwitcher />
          <AccessibilityShortcut />
        </div>
      </div>}
    </Container>
  );
};