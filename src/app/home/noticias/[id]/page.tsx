"use client";

import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent";
import { Content } from "../../(home)/style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { Column, Columns, Container } from '@/components/UltimasNoticias/style';
import NewsCard from "@/components/NewsCard/NewsCard";

export const camelCase = (str:any) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

export default function Page(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [data, setData] = useState<any>(null);
  const [news, setNews] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  
  useEffect(() => {
    Promise.all([`/api/noticia/${props?.params?.id}`, '/api/noticias?items_per_page=4'].map(function(url: any) {
      return http.get(`${url}`);
    })).then((response: any) => {
      if(response[0] && response[0]?.rows?.length) setData(response[0]?.rows?.shift())
      if(response[1] && response[1]?.rows?.length) setNews(response[1]?.rows)
    });   
  }, [props]);    

  useEffect(() => {
    if(data && data?.field_conteudo) {
      Promise.all(data?.field_conteudo.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setContent(response)
      }).catch(console.error);   
    }
  }, [data]);

  return <Content className="d-flex flex-column">
      {config && <title>{`${config?.site_name} - ${data?.title}`}</title>}  

      {content && <>
        {content.map((component: any, index: Number) => (
          <DynamicComponent page={data} data={component} key={index} componentName={camelCase(component?.type[0]?.target_id.replaceAll("_"," ")).split(" ").join("")} />
        ))}
      </>}

      {data?.body && <section>
        <Container className="container" dangerouslySetInnerHTML={{ __html: data?.body }} />
      </section>}

      {news && <section>
        <Container className="container">
          <BlockHead className="col-12" data={{
            title: "<strong>Ver mais notícias</strong>"
          }} />
          <Columns className="d-flex mt-5">
            <Column className='col-12 flex-fill d-flex flex-wrap align-items-stretch'>
              {news.map((row: any, index: any) => (
                <>
                  <NewsCard
                    nid={row.nid}
                    key={index}
                    index={index}
                    title={row.title}
                    description={row.summary}
                    image={config?.basePath + row.image}
                    link={row.image}
                    date={row.date}
                    category={row.category}
                    className="col-12 col-md-6 col-lg-3"
                  />              
                </>
            ))}</Column>    
          </Columns>     
        </Container>
      </section>}
  </Content>;
}
