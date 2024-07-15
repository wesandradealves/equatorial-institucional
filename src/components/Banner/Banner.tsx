"use client";
import { Content, Mask, Container, Title } from "./style";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function Banner(props: any) {
  return (
    <>
      {props?.data && <Content background_image={props?.data?.field_imagem[0]?.url} className={`overflow-hidden ${props?.data?.type[0]?.target_id}`}>
        <Container className="container d-flex flex-column">
          <Breadcrumbs data={props} />
          <Title dangerouslySetInnerHTML={{__html: props?.data?.field_title[0]?.value ? props?.data?.field_title[0]?.value  : props?.page?.title[0]?.value}}></Title>
        </Container>
        <Mask xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Mask>        
      </Content>}  
    </>
  );
};