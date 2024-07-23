"use client";
import { HttpService } from "@/services";
import { Content, Container, Columns, Summary, Title, Info } from "./style";
import { useContext, useEffect, useState } from "react";
import { BlockTypo } from "@/types/enums";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import ConfigProvider from "@/context/config";
import Galeria from "@/components/Galeria/Galeria";

export default function BlockIniciativas(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const [data, setData] = useState<any>(null);
  
  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!blockData) {
      fetchData('/entity/block/block_iniciativas_equatorial').then((response: BlockTypo[] | any) => {
        if(response) {
          let uuid = response?.settings?.id.split("block_content:").pop();
          fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
            if(response) setBlockData(response[0])
          }).catch(console.error);        
        }
      }).catch(console.error);   
    }

    if(!data) {
      fetchData('/api/iniciativas').then((response: any) => {
        if(response && response?.rows) {
          Promise.all(response?.rows.map(async (row: any) => {
            let category: any = await http.get(`/api/taxonomy/${row?.category}`);
            return {
              ...row,
              category: {
                tid: row?.category,
                raw: category?.name[0]?.value
              }
            }
          })).then((data) => setData(data));    
        }
      }).catch(console.error);   
    }    
  }, []); 

  return (
    <>{data && blockData && <Content className="block_iniciativas">
      <Container className="container-fluid p-0">
        <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
          {blockData && <Container className="container">
            <BlockHead className="col-12 d-flex flex-column justify-content-center align-items-center p-0" data={blockData} />
          </Container>}
          {data && <Galeria data={data} />}
        </Columns>
      </Container>  
    </Content>}</>
  );
};
