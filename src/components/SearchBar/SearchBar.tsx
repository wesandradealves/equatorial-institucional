import LanguageProvider from "@/components/LanguageSwitcher/context";
import { SearchTypo } from "@/types/enums";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, Inner, Input, Submit } from "./style";

export default function SearchBar(props: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams ?? "");

  const { lang } = useContext<any>(LanguageProvider);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchTypo>();

  const onSubmit: SubmitHandler<SearchTypo> = async (data) => {
    try {
      if (data?.keywords) {
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
      <Container
        onSubmit={handleSubmit(onSubmit)}
        className={`searchbar ${props?.className}`}
      >
        <Inner className="d-flex align-items-center flex-wrap">
          <Submit>
            <SearchIcon />
          </Submit>
          {props?.data && (
            <Input
              placeholder={props?.data[lang?.key.replace("-", "_")]}
              type="text"
              {...register("keywords", { required: true })}
              className="flex-fill"
              onChange={(event) => {
                params.set("page", "1");

                if (event.target.value) {
                  params.set("s", event.target.value);
                } else {
                  params.delete("s");
                  params.delete("page");
                }

                if (pathname && pathname.indexOf("busca") > -1)
                  router.push(`/busca/?${params.toString()}`, {
                    scroll: false,
                  });
              }}
              defaultValue={searchParams?.get("s") ?? ""}
            />
          )}
        </Inner>
      </Container>
    </>
  );
}
