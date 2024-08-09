"use client";

import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent";
import { usePathname, useRouter } from "next/navigation";
import { Content } from "../(home)/style";
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

  const handleNotFound = () => {
    router.push(`/page-not-found`, {scroll : true})
  }
  
  useEffect(() => {
    const el = document.body;
    el.classList.remove("error-page");            
    let slug = pathname?.split("/");
    fetchData(`/api/page/${slug?.pop()}`).then((response: any) => {
      if(response) setData(response)
    }).catch(handleNotFound);   
  }, [props, pathname]);    

  useEffect(() => {
    if(data && data?.field_conteudo) {

      let conteudo = data?.field_conteudo.map(function(row: any){
          return row.target_id
      });

      Promise.all(conteudo.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setContent(response)
      }).catch(console.error);      
    }
  }, [data]);

  return <Content className="d-flex flex-column">
    {data && config && <title>{`${config?.site_name} - ${data?.title[0].value}`}</title>}  

    {content && <>
      {content.map((component: any, index: Number) => (
        <DynamicComponent page={data} data={component} key={index} componentName={camelCase(component?.type[0]?.target_id.replaceAll("_"," ")).split(" ").join("")} />
      ))}
    </>}
  </Content>;
}
