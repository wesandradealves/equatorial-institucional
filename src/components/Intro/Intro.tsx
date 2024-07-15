"use client";
import { useEffect } from "react";
import { Content, Container, Text, Thumbnail, Img, Mask } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";

export default function Intro(props: any) {   
  return (
    <>
      {props?.data && <Content className={props?.data?.type[0]?.target_id}>
        <Container className="container d-flex align-items-start flex-wrap">
          <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />
          {props?.data.field_texto && <Text className="flex-fill" dangerouslySetInnerHTML={{__html: props?.data.field_texto[0]?.value}} />}
          {props?.data.field_imagem && <Thumbnail className="overflow-hidden">
            <Mask width="368" height="103" viewBox="0 0 368 103" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M493.584 33.6891L462.598 44.2325C432.087 54.704 370.114 75.791 305.151 73.9277C240.189 72.0645 171.287 47.395 106.758 48.3915C42.2285 49.3881 -18.8781 76.1945 -48.9561 89.5258L-79.5094 102.929L-95.101 -0.0228424L-63.2483 -4.84676C-31.8711 -9.59869 31.8341 -19.2465 95.064 -28.8224C158.294 -38.3982 221.999 -48.0461 285.229 -57.6219C348.459 -67.1978 412.164 -76.8456 443.541 -81.5975L475.394 -86.4215L493.584 33.6891Z" fill="#0414A1"/>
            </Mask>
            <Img className="img-fluid" loading="lazy" alt={props?.data.field_imagem?.alt} src={props?.data.field_imagem[0]?.url} />
          </Thumbnail>}
        </Container>
      </Content>}    
    </>
  );
};