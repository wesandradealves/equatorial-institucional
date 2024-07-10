import { useContext } from "react";
import { Container, TariffBand, Text } from "./style";
import AccessibilityShortcut from "./Accessibility";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import LanguageProvider from "@/components/LanguageSwitcher/context";

export default function Topbar(props: any) {
  const { lang } = useContext<any>(LanguageProvider);
  const classNames = require('classnames');

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
      {props?.data && <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <TariffBand className="d-flex align-items-center" tariff={props?.data?.tariff_band?.band?.value}>
          {props?.data?.tariff_band?.label[lang?.key.replace("-","_")] && props?.data?.tariff_band?.band?.label[lang?.key.replace("-","_")] && <Text>{`${props?.data?.tariff_band?.label[lang?.key.replace("-","_")]}: ${props?.data?.tariff_band?.band?.label[lang?.key.replace("-","_")]}`}</Text>}
          {props?.data?.text[lang?.key.replace("-","_")] && <Text>{props?.data?.text[lang?.key.replace("-","_")]}</Text>}
        </TariffBand>
        <div className="d-flex align-items-center justify-content-end">
          <LanguageSwitcher />
          <AccessibilityShortcut />
        </div>
      </div>}
    </Container>
  );
};