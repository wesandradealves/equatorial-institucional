"use client";

import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent";
import { usePathname } from "next/navigation";
import { Content } from "../(home)/style";

export default function Page(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [data, setData] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  const pathname = usePathname();
  
  const fetchData = async($url: any) => {
    const response:any = await http.get($url);
    return response;
  }  

  const camelCase = (str:any) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
  }
 
  useEffect(() => {
    fetchData(`/api/page/${pathname.split("/").filter(index => index !== "" && index !== "home").join("/")}`).then((response: any) => {
      if(response) setData(response)
    })
  }, [props]);    

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
    {data && <title>{`${config?.site_name} - ${data?.title[0].value}`}</title>}  

    {content && <>
      {content.map((component: any, index: Number) => (
        <DynamicComponent page={data} data={component} key={index} componentName={camelCase(component?.type[0]?.target_id.replaceAll("_"," ")).split(" ").join("")} />
      ))}
    </>}
  </Content>;
}