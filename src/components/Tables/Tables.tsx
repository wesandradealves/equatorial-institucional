"use client";
import { useEffect, useState } from "react";
import { Content, Container, Column } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { HttpService } from "@/services";
import TablesData from "./TablesData";
import TablesFilter from "./TablesFilter";

export default function Tables(props: any) {  
  const http = new HttpService();
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>(null);

  const fetchData = async (uri: any) => {
    let response: any[] = await http.get(`/api/csv/?csv=${uri}`);
    return response;
  };

  useEffect(() => {
    if(props?.data?.field_csv && props?.data?.field_csv[0]) {
      fetchData(props?.data?.field_csv[0]?.url).then((response: any) => {
        setData(JSON.parse(response))
      })
    }
  }, []); 

  useEffect(() => {
    if(data) setFilter(data)
  }, [data]);   

  return (
    <>
      <Content 
        data-component={props?.id}
        className={`${props?.id} overflow-hidden`}>
        <Container>
          <Container className={`container d-flex align-items-start flex-wrap`}>
            {props?.data?.field_title && props?.data?.field_title[0]?.value && <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />}
            {data && 
            <Column className="flex-fill ms-lg-5 mt-5 mt-lg-0 d-flex flex-column">
              {props?.data?.field_filter_key && props?.data?.field_filter_key[0] && <TablesFilter 
                config={
                  [props?.data].map((o:any)=>{
                    return {
                      field_filter_key: o?.field_filter_key,
                      field_items_per_page: o?.field_field_items_per_page,
                      field_key: o?.field_key,
                      field_key_label: o?.field_key_label
                    }
                  })[0]
                } 
                data={data} 
                filter={filter}
                onChange={(e:any) => {
                  setFilter(e !== '-' ? data.filter((o:any) => o[props?.data?.field_filter_key[0]?.value].trim().toLowerCase() == e.trim().toLowerCase()) : data)
                }}
              />}

              <TablesData  
              config={
                [props?.data].map((o:any)=>{
                  return {
                    field_filter_key: o?.field_filter_key,
                    field_items_per_page: o?.field_field_items_per_page,
                    field_key: o?.field_key,
                    field_key_label: o?.field_key_label
                  }
                })[0]
              } 
              filter={filter}
              data={data} />
            </Column>}
          </Container>
        </Container>
      </Content>  
    </>
  );
};