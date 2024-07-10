import { Container, Inner, Input, Submit } from "./style";
import SearchIcon from '@mui/icons-material/Search';
import LanguageProvider from "@/components/LanguageSwitcher/context";
import { useContext, useEffect } from "react";

export default function SearchBar(props: any) {
  const { lang } = useContext<any>(LanguageProvider);

  useEffect(() => {
    console.log(lang?.key, props?.data)
  }, [props, lang]);    
  
  return (
    <Container className={`searchbar ${props?.className}`}>
      <Inner className="d-flex align-items-center flex-wrap">
        <Submit>
          <SearchIcon />
        </Submit>
        <Input placeholder={props?.data[lang?.key.replace("-","_")]} type="text" className="flex-fill" />
      </Inner>
    </Container>
  );
}
