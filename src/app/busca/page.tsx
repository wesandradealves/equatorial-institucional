"use client";

import React, { lazy, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import Template from "../home/template";
import ConfigProvider from "@/context/config";
import { HttpService } from "@/services";
import { useRouter } from 'next/navigation';

export default function Search(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const router = useRouter();

  const fetchData = async($url: any) => {
    const response:any = await http.get($url);
    return response;
  }    
  
  useEffect(() => {
    if(props?.searchParams?.s && props?.searchParams) {
      fetchData(`/api/busca/?s=${props?.searchParams?.s}`).then((response: any) => {
        console.log(response)
      })
    } else {
      router.push(`${process.env.NEXT_PUBLIC_HOME_URL}`);
    }
  }, [props]);  

  return <Template>
    {config && <>
      <title>{`${config?.site_name} - Busca por "${props?.searchParams?.s}"`}</title>
      {props?.searchParams?.s}
    </>}
  </Template>;
}
