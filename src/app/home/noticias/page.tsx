"use client";

import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import Template from "../../home/template";
import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent";
import { camelCase } from "../../home/[...slug]/page";
import { Label, FilterWrapper, Select, Option, SelectWrapper } from "@/components/Tables/style";
import { fetchData } from "../../layout";
import NewsCard from "@/components/NewsCard/NewsCard";
import { Column } from "@/components/UltimasNoticias/style";
import Pagination from "@/components/Pagination/Pagination";

export default function Noticias(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [taxonomies, setTaxonomies] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
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
    // ?items_per_page=${items_per_page}&page=${page}${params.get("cat") ? `&cat=${params.get("cat")}` : ''}
    Promise.all([
      `/api/noticias/${params.get("cat") ? `${params.get("cat")}` : ''}?items_per_page=${items_per_page}&page=${page}`, 
      `/api/page/noticias`].map(function(url: any) {
      return http.get(`${url}`);
    })).then((data) => {
      setData({
        page: data[1],
        search: data[0]
      })
    });  
  }, [props]);  

  useEffect(() => {
    if(data && data?.page && data?.page?.field_conteudo) {

      let conteudo = data?.page?.field_conteudo.map(function(row: any){
          return row.target_id
      });

      Promise.all(conteudo.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setContent(response)
      }).catch(console.error);      
    }

    if(data?.search?.pager && data?.search) setPager(data?.search?.pager)
  }, [data]);  
  
  useEffect(() => {
    fetchData(`/api/taxonomy/noticias`).then((response: any) => {
      setTaxonomies(response)
    }).catch(console.error);  
  }, []);  

  const handleFilter = (e: any) => {
    if(e) {
      params.set('cat', e)
    } else {
      params.delete('cat')
    }

    router.push(`${pathname}?${params.toString()}`, {scroll : false})
  };  

  const handlePaginate = (page: any) => {
    params.set('page', page),
    router.push(`${pathname}?${params.toString()}`, {scroll : false})    
  };  

  return <Template>
    {config && <>
      <title>{`${config?.site_name} - ${data?.page?.title[0]?.value}`}</title>
    </>}

    {content && <>
      {content.map((component: any, index: Number) => (
        <DynamicComponent page={data} data={component} key={index} componentName={camelCase(component?.type[0]?.target_id.replaceAll("_"," ")).split(" ").join("")} />
      ))}
    </>}    

    {(taxonomies || data) && <>
      <section>
        <div className="container pb-5">
          {taxonomies && <FilterWrapper className="col-12 d-flex align-items-center">
              <Label>Ver notícias sobre </Label>
              <SelectWrapper>
                  <Select onChange={(e) => handleFilter(e.target.value)}>
                      <Option key={0} value="">-</Option>
                      {taxonomies.map((term: any, i: number) => (
                          <Option key={i + 1} value={term?.tid[0]?.value}>{term?.name[0]?.value}</Option>
                      ))}    
                  </Select>
              </SelectWrapper>
          </FilterWrapper>}     

          {data && data?.search && data?.search?.rows.length ? <>
            <Column className='flex-fill mt-5 d-flex flex-wrap align-items-stretch'>
              {data?.search?.rows.map((row:any, index:any) => (
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
            ))}</Column>

            {pager && <Pagination className="pt-5" showNumbers={false} onPaginate={handlePaginate} data={pager} />} 
          </> : <p className="d-block text-align-center pt-5">{`Nenhum resultado encontrado. :(`}</p>}                
        </div>
      </section>
    </>}
  </Template>;
}
