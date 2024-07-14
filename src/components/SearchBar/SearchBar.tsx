import LanguageProvider from "@/components/LanguageSwitcher/context";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { Container, Inner, Input, Submit } from "./style";

export default function SearchBar(props: any) {
  const { lang } = useContext<any>(LanguageProvider);

  return (
    <>
      {props?.data && lang && <Container className={`searchbar ${props?.className}`}>
        <Inner className="d-flex align-items-center flex-wrap">
          <Submit>
            <SearchIcon />
          </Submit>
          <Input
            placeholder={props?.data[lang?.key.replace("-", "_")]}
            type="text"
            className="flex-fill"
          />
        </Inner>
      </Container>}    
    </>
  );
}
