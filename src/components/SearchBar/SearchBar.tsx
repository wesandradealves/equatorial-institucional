import LanguageProvider from "@/components/LanguageSwitcher/context";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useEffect } from "react";
import { Container, Inner, Input, Submit } from "./style";
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchTypo } from "@/types/enums";
import { useRouter } from 'next/navigation';

export default function SearchBar(props: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const { lang } = useContext<any>(LanguageProvider);

  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<SearchTypo>();

  const onSubmit: SubmitHandler<SearchTypo> = async data => {
    try {
      if(data?.keywords) {
        // const el = document.body;
        // el.classList.remove("error-page");        
        router.push(`/busca/?s=${data?.keywords}&page=1`);
      }
    } catch (error) {
      throw error;
    }
  }; 

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)} className={`searchbar ${props?.className}`}>
        <Inner className="d-flex align-items-center flex-wrap">
          <Submit>
            <SearchIcon />
          </Submit>
          {props?.data && <Input
            placeholder={props?.data[lang?.key.replace("-", "_")]}
            type="text"
            {...register("keywords", { required: true })} 
            className="flex-fill"
            onChange={(event) => {
              params.set('page', '1');

              if (event.target.value) {
                params.set('s', event.target.value);
              } else {
                params.delete('s');
                params.delete('page');
              }

              if(pathname.indexOf("busca") > -1) router.push(`/busca/?${params.toString()}`, {scroll : false});
            }}
            defaultValue={searchParams.get("s"?.toString()) || ''}
          />}
        </Inner>
      </Container>
    </>
  );
}
