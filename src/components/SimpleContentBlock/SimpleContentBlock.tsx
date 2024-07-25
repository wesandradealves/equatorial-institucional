"use client";
import { useEffect } from "react";
import { Content, Container, Text } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";

export default function SimpleContentBlock(props: any) {
  return (
    <>
      {props?.data && <Content data-component={props?.id} className={props?.id}>
        <Container className="container d-flex flex-wrap">
          <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />
          {props?.data?.field_body && <Text className="flex-fill" dangerouslySetInnerHTML={{__html: props?.data.field_body[0]?.value}} />}
        </Container>
      </Content>}    
    </>
  );
};