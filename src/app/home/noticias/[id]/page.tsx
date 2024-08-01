"use client";

import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Content } from "../../(home)/style";
import { fetchData } from "@/app/layout";

export const camelCase = (str:any) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

export default function Page(props: any) {
  const router = useRouter();
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [data, setData] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  const pathname = usePathname();
  
  useEffect(() => {
    fetchData(`/api/noticia/${props?.params?.id}`).then((response: any) => {
      if(response && response?.rows?.length) setData(response?.rows?.shift())
    }).catch(console.error);     
  }, [props]);    

  useEffect(() => {
    if(data && data?.field_conteudo) {
      Promise.all(data?.field_conteudo.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setContent(response)
      }).catch(console.error);   
    }

    console.log(data)
  }, [data]);

  return <Content className="d-flex flex-column">
    <>
      {config && <title>{`${config?.site_name} - ${data?.title}`}</title>}  
      {content && <>
        {content.map((component: any, index: Number) => (
          <DynamicComponent page={data} data={component} key={index} componentName={camelCase(component?.type[0]?.target_id.replaceAll("_"," ")).split(" ").join("")} />
        ))}
      </>}
      {data?.body && <section>
        <div className="container" dangerouslySetInnerHTML={{ __html: data?.body }} />
      </section>}
    </>

  </Content>;
}
