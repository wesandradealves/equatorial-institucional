"use client";
import { useEffect, useState } from "react";
import { Content, Container } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { HttpService } from "@/services";
import TablesData from "./TablesData";

export default function Tables(props: any) {  
  const http = new HttpService();
  const [data, setData] = useState<any>(null);

  const fetchData = async (uri: any) => {
    let response: any[] = await http.get(`/api/csv/?csv=${uri}`);
    return response;
  };

  useEffect(() => {
    if(props?.data?.field_csv) {
      fetchData(props?.data?.field_csv[0]?.url).then((response: any) => {
        setData(JSON.parse(response))
      })
    }
  }, [props]); 

  return (
    <>
      <Content 
        data-component={props?.id}
        className={`${props?.id} overflow-hidden`}>
        <Container>
          <Container className={`container d-flex align-items-start flex-wrap`}>
            {props?.data?.field_title && props?.data?.field_title[0]?.value && <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />}
            {data && <TablesData className="flex-fill ms-lg-5" 
            config={
              [props?.data].map((o:any)=>{
                return {
                  field_filter_key: o?.field_filter_key,
                  field_items_per_page: o?.field_items_per_page,
                  field_key: o?.field_key,
                  field_key_label: o?.field_key_label
                }
              })[0]
            } 
            data={data} />}
          </Container>
        </Container>
      </Content>  
    </>
  );
};