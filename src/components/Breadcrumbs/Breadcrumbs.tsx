"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Content } from "./style";
import Link from "next/link";
import { useSearchParams, usePathname } from 'next/navigation';
import NavigationProvider from "../Footer/context";
import { HttpService } from "@/services";

export default function Breadcrumbs(props: any) {
  const params = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [s, setSearchParams] = useState<any>(params?.get('s'));
  const http = new HttpService();
  const pathname = usePathname();
  const slugify = require('slugify');
  const [paths, setPaths] = useState<any>(null);
  
  useEffect(() => {
    setData(props?.data?.page?.page ? props?.data?.page?.page : props?.data?.page)
  }, [props]); 
  
  useEffect(() => {
    setSearchParams(params?.get('s')); 
  }, [params]); 

  useEffect(() => {
    console.log(paths)
  }, [paths]);   

  const handleBreadcrumbPaths = () => {
    var paths: any = [];

    Promise.all(["/api/menu_items/main", "/api/menu_items/rodape"].map(function(url: any) {
      return http.get(url);
    })).then((response: any) => {

      let nav = response.reduce((acc: any, val: any) => [...acc, ...val]);
      let path = pathname.split("/");
      path.splice(0,2);

      let group = nav.find((link: any) => path.indexOf(slugify(link?.title).toLowerCase()) !== -1);

      if(data?.title[0]?.value !== group?.title) {
        paths.push(group?.title);

        let subgroup = group?.below.find((link: any) => path.indexOf(slugify(link?.title).toLowerCase()) !== -1);

        if(data?.title[0]?.value !== subgroup?.title) {
          paths.push(subgroup?.title, typeof data?.title == 'object' ? data?.title[0]?.value : data?.title)
        }
      }

      if(paths) setPaths(paths.filter((link: any) => link !== 'undefined' && link !== undefined))
    }).catch(console.error); 
  };  

  useEffect(() => {
    if(data) handleBreadcrumbPaths()
  }, [data]);    

  const handleArchive = (str: any) => {
    switch (str) {
      case 'Artigo':
        return `${process.env.NEXT_PUBLIC_HOME_URL}/noticias/`;
        break;
    
      default:
        return `#`;
        break;
    }
  }  

  return (
    <Content className="breadcrumbs d-inline-flex align-items-center justify-content-center me-auto">
      <Link className="nav-link" href={`${process.env.NEXT_PUBLIC_HOME_URL}`}>
        <>
          <span>
            <span className="d-none d-md-block">Home</span>
            <span className="d-block d-md-none">
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </span>
        </>
      </Link>
      
      {(data && props?.data?.page?.type && typeof props?.data?.page?.type == "string") ? 
        <>
          <Link className="nav-link d-none d-md-flex" href={handleArchive(props?.data?.page?.type)}><span>{props?.data?.page?.type}</span></Link>
          <Link className="nav-link d-none d-md-flex" href="#"><span>{typeof data?.title == 'object' ? data?.title[0]?.value : data?.title}</span></Link>
        </> : <>
          {paths && <>
            {paths.map((path: any, index: any) => (
              <Link key={index} className="nav-link d-none d-md-flex" href="#"><span>{path}</span></Link>
            ))}
          </>} 
        </>
      }

      {s && <Link className="nav-link d-none d-md-flex" href="#"><span>{`Resultados de busca para "${s}"`}</span></Link>}
    </Content>
  );
};