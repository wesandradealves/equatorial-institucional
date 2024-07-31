import LanguageProvider from "@/components/LanguageSwitcher/context";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useEffect } from "react";
import { Container, Inner, Input, Submit } from "./style";
import { redirect } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchTypo } from "@/types/enums";
import { useRouter } from 'next/navigation';

export default function SearchBar(props: any) {
  const { lang } = useContext<any>(LanguageProvider);

  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<SearchTypo>();

  const onSubmit: SubmitHandler<SearchTypo> = async data => {
    try {
      if(data?.keywords) {
        const el = document.body;
        el.classList.remove("error-page");        
        router.push(`/busca/?s=${data?.keywords}`);
      }
    } catch (error) {
      throw error;
    }
  }; 

  return (
    <>
      {props?.data && lang && <Container onSubmit={handleSubmit(onSubmit)} className={`searchbar ${props?.className}`}>
        <Inner className="d-flex align-items-center flex-wrap">
          <Submit>
            <SearchIcon />
          </Submit>
          <Input
            placeholder={props?.data[lang?.key.replace("-", "_")]}
            type="text"
            {...register("keywords", { required: true })} 
            className="flex-fill"
          />
        </Inner>
      </Container>}    
    </>
  );
}
