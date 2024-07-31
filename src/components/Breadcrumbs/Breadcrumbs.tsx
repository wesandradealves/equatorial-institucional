"use client";
import { useEffect, useState } from "react";
import { Content } from "./style";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

export default function Breadcrumbs(props: any) {
  const params = useSearchParams();
  const [data, setData] = useState<any>(null);
  const [s, setSearchParams] = useState<any>(params?.get('s'));
  
  useEffect(() => {
    setData(props?.data?.page?.page ? props?.data?.page?.page : props?.data?.page)
  }, [props]); 
  
  useEffect(() => {
    setSearchParams(params?.get('s')); 
  }, [params]); 

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
      {data && <Link className="nav-link d-none d-md-flex" href="#"><span>{data?.title[0]?.value}</span></Link>}
      {s && <Link className="nav-link d-none d-md-flex" href="#"><span>{`Resultados de busca para "${s}"`}</span></Link>}
    </Content>
  );
};