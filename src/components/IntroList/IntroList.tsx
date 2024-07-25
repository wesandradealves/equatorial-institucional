"use client";
import { useEffect, useState } from "react";
import { Content, Container, Column, Mask, ListItem, ListGroup, Text, Title, Arrow, Inner } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { HttpService } from "@/services";

export default function IntroList(props: any) {   
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
        <Mask className="--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBDB33" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Mask>        
        <Container className="container-fluid ps-0 pe-0">
          <Container className="container d-flex align-items-start flex-wrap">
            <BlockHead className="col-12 col-lg-3 pe-lg-5 mb-4 mb-lg-0 d-flex align-items-start justify-content-start d-flex" data={props?.data} />
            {data && <Column className="flex-fill">
              <ListGroup data-layout={props?.data?.field_layout_intro_list ? props?.data?.field_layout_intro_list[0]?.value : "col-lg-6"} className="d-flex align-items-center flex-wrap">
                {data.map(function(row: any, i: number){
                  return (
                    <ListItem onClick={() => (location.href = row?.field_link[0]?.value)} 
                    className={`col-12 ${props?.data?.field_layout_intro_list && props?.data?.field_layout_intro_list[0]?.value ? props?.data?.field_layout_intro_list[0]?.value : "col-lg-6"} d-flex align-items-stretch`} 
                    key={i}>
                      <Inner className="d-flex flex-column flex-fill pe-xl-5">
                        <Title>
                          <span dangerouslySetInnerHTML={{__html: row?.field_title[0]?.value}} />
                        </Title>
                        <Text dangerouslySetInnerHTML={{__html: row?.field_texto[0]?.value}} />
                      </Inner>
                      <Arrow className="fa-solid fa-arrow-right d-flex text-end justify-content-end"></Arrow>
                    </ListItem>
                  );
                })}
              </ListGroup>
            </Column>}
          </Container>
        </Container>
        <Mask className="--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBDB33" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Mask>        
        <Mask className="--bottom --backdrop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBDB33" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Mask>        
      </Content>}    
    </>
  );
};