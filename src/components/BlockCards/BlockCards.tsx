"use client";
import { useEffect, useState } from "react";
import { Content, Title, Img, Text, Icon, Container, Cards, Card, Inner } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { HttpService } from "@/services";

export default function BlockCards(props: any) {
  const http = new HttpService();
  const [content, setContent] = useState<any>(null);
  
  useEffect(() => {
    if(props?.data && props?.data?.field_card) {

      let conteudo = props?.data?.field_card.map(function(row: any){
          return row.target_id
      });

      Promise.all(conteudo.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setContent(response)
      }).catch(console.error);      
    }
  }, [props]);    

  return (
    <>{props?.data && content && <Content data-component={props?.id} className={`${props?.id}`}>
      <Container className="container d-flex flex-column">
        <BlockHead className="col-12 pe-0 d-flex align-items-center justify-content-center text-center" data={props?.data} />
        {content && <Cards className="cards d-flex flex-column flex-lg-row flex-wrap align-items-stretch">
          {content.map((row: any, index: any) => (
            <Card className="flex-fill" key={index}>
              <Inner className="d-flex flex-column overflow-hidden">
                {row?.field_imagem && <Img loading="lazy" className="img-fluid" src={row?.field_imagem[0].url} />}
                <Title className="d-flex align-items-center">
                  {row?.field_icone && <Icon loading="lazy" className="img-fluid" src={row?.field_icone[0].url} />}
                  <span dangerouslySetInnerHTML={{__html: row?.field_title[0]?.value}}></span>
                </Title>
                {row?.field_texto && <Text dangerouslySetInnerHTML={{__html: row?.field_texto[0]?.value}} />}
              </Inner>
            </Card>      
          ))}
        </Cards>}
      </Container>
    </Content>}</>
  );
};