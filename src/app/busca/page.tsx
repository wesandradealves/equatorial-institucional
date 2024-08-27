"use client";

import React, { useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import Template from "../site/template";
import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label, FilterWrapper, Select, Option, SelectWrapper } from "@/components/Tables/style";
import { fetchData } from "@/utils";
import NewsCard from "@/components/NewsCard/NewsCard";
import { Column, Container } from "@/components/UltimasNoticias/style";
import Pagination from "@/components/Pagination/Pagination";
import { SearchResults } from "./style";

export default function Search(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [taxonomies, setTaxonomies] = useState<any>(null);
  const [pager, setPager] = useState<any>(null);
  const items_per_page = 12;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const page = useMemo(() => {
    let page: any = params.get("page");
    return parseInt(page) - 1;
  }, [props]);

  useEffect(() => {
    if (props?.searchParams?.s && props?.searchParams) {
      Promise.all(
        [
          `/api/busca/?s=${
            props?.searchParams?.s
          }&items_per_page=${items_per_page}&page=${page}${
            params.get("cat") ? `&cat=${params.get("cat")}` : ""
          }`,
          `/api/page?alias=/busca`,
        ].map(function (url: any) {
          return http.get(`${url}`);
        })
      ).then((data) => {
        setData({
          page: data[1],
          search: data[0],
        });
      });
    } else {
      router.push(`${process.env.NEXT_PUBLIC_HOME_URL}`);
    }
  }, [props]);

  useEffect(() => {
    if (data?.search?.pager && data?.search) setPager(data?.search?.pager);
  }, [data]);

  useEffect(() => {
    fetchData(`/api/taxonomy/noticias`)
      .then((response: any) => {
        setTaxonomies(response);
      })
      .catch(console.error);
  }, []);

  const handleFilter = (e: any) => {
    if (e) {
      params.set("cat", e);
    } else {
      params.delete("cat");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePaginate = (page: any) => {
    params.set("page", page),
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Template>
      {config && (
        <>
          <title>{`${config?.site_name} - ${data?.page?.title[0]?.value} - (${data?.search?.pager?.total_items}) Resultado(s) de busca para "${props?.searchParams?.s}"`}</title>
        </>
      )}

      {(taxonomies || data) && (
        <>
          <SearchResults>
            <Container className="container pb-5">
              {taxonomies && (
                <FilterWrapper className="col-12 d-flex align-items-center">
                  <Label>Ver notícias sobre </Label>
                  <SelectWrapper>
                    <Select onChange={(e) => handleFilter(e.target.value)}>
                      <Option key={0} value="">
                        -
                      </Option>
                      {taxonomies.map((term: any, i: number) => (
                        <Option key={i + 1} value={term?.tid[0]?.value}>
                          {term?.name[0]?.value}
                        </Option>
                      ))}
                    </Select>
                  </SelectWrapper>
                </FilterWrapper>
              )}

              {data && data?.search && data?.search?.rows.length ? (
                <>
                  <Column className="flex-fill mt-5 d-flex flex-wrap align-items-stretch">
                    {data?.search?.rows.map((row: any, index: any) => (
                      <NewsCard
                        nid={row.nid}
                        key={index}
                        index={index}
                        className="col-12 col-sm-6 col-md-4 col-lg-3"
                        title={row.title}
                        description={row.summary}
                        image={config?.basePath + row.image}
                        link={row.image}
                        date={row.date}
                        category={row.category}
                      />
                    ))}
                  </Column>

                  {pager && (
                    <Pagination
                      className="pt-5"
                      showNumbers={false}
                      onPaginate={handlePaginate}
                      data={pager}
                    />
                  )}
                </>
              ) : (
                <p className="d-block text-align-center pt-5">{`Nenhum resultado encontrado. :(`}</p>
              )}
            </Container>
          </SearchResults>
        </>
      )}
    </Template>
  );
}
