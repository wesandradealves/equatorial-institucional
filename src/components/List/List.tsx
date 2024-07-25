"use client";

import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { Content, Container, Column, ListGroup, ListItem, Arrow, Title, Text, Inner } from "./style";
import { useEffect, useState } from "react";
import { HttpService } from "@/services";

export default function List(props: any) {   
  const [data, setData] = useState<any>(null);
  const http = new HttpService();
    
  useEffect(() => {
    if(!data && props?.data?.field_list_item) {
      let items = Promise.all(props?.data?.field_list_item.map(async (row: any) => {
        let item: any = await http.get(`/entity/paragraph/${row?.target_id}`);
        return item
      })).then((data) => setData(data)); 
    }
  }, [props]);  

  return (
    <>
      {props?.data && <Content className={props?.id}> 
        <Container className="container d-flex col-xxl-9 flex-wrap">
          <BlockHead className="col-12 col-lg-4 pe-lg-3 mb-5 mb-lg-0" data={props?.data} />
          {data && <Column className="flex-fill">
              <ListGroup className="d-flex align-items-center flex-wrap">
                {data.map(function(row: any, i: number){
                  return (
                    <ListItem onClick={() => (location.href = row?.field_link[0]?.value)} className="col-12 d-flex align-items-center" key={i}>
                      <Inner className="d-flex flex-column flex-fill pe-3">
                        <Title>
                          <span dangerouslySetInnerHTML={{__html: row?.field_title[0]?.value}} />
                        </Title>
                        <Text dangerouslySetInnerHTML={{__html: row?.field_texto[0]?.value}} />
                      </Inner>
                      <Arrow className="fa-solid fa-plus d-flex align-items-center justify-content-center"></Arrow>
                    </ListItem>
                  );
                })}
              </ListGroup>
            </Column>}
        </Container>
      </Content>}
    </>
  );
};