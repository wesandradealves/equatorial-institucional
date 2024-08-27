"use client";

import { HttpService } from "@/services";
import { Container, Information, Mask, Services, Title, ServiceCard, CardIcon, CardTitle, ClaraShortcut } from "./style";
import { useContext, useEffect, useState } from "react";
import ConfigProvider from "@/context/config";
import LocationSelector from "@/components/LocationSelector/LocationSelector";
import { fetchData } from "@/utils";

export default function Hero(props: any) {
  const http = new HttpService();
  const { config } = useContext<any>(ConfigProvider);
  const [data, setData] = useState<any>(null);
  const [services, setServices] = useState<any>(null);

  useEffect(() => {
    if(!data) {
      fetchData('/api/blocks/banner').then((response: any) => {
        if(response) setData(response[0])
      }).catch(console.error);
    }  
  }, []); 
  
  useEffect(() => {
    if(data && data?.services.length) {
      Promise.all(data?.services.map(function(sid: any) {
        return http.get(`/entity/paragraph/${sid}`);
      })).then((response: any) => {
        setServices(response)
      }).catch(console.error);
    }  
  }, [data]); 

  return (<>
    {data && <Container data-component={props?.id ? props?.id : "Hero"} className="Hero" background_image={config?.basePath + data?.image}>
      <div className="container">
        <div className="inner d-flex align-items-lg-end flex-column flex-lg-row">
          <Information className="d-flex flex-column col-lg-5">
            <LocationSelector />

            {data?.title && <Title dangerouslySetInnerHTML={{ __html: data?.title }}></Title>}

            {data?.clara_shortcut && <ClaraShortcut className="d-none d-lg-flex" href={data?.clara_url}>
              <img src={config?.basePath + data?.clara_shortcut} alt={data?.title.replace(/<[^>]*>?/gm, '')} />  
            </ClaraShortcut>}
          </Information>

          {services && <Services className="d-flex flex-wrap align-items-stretch">
            {services.map(function(service: any, i: number) {
              return (
                <ServiceCard className="col-6 col-sm-4 col-lg-6 col-xl-4" href={service.field_link[0].value} key={i}>
                  <span className="card-inner d-flex flex-column justify-content-start align-items-start">
                    <CardIcon loading="lazy" alt={service.field_titulo[0].value} src={service.field_imagem[0].url} />
                    <CardTitle>{service.field_titulo[0].value}</CardTitle>
                  </span>
                </ServiceCard>                
              )
            })}  
          </Services>}

          {data?.clara_shortcut && <ClaraShortcut className="d-flex d-lg-none" href={data?.clara_url}>
            <img src={config?.basePath + data?.clara_shortcut} alt={data?.title.replace(/<[^>]*>?/gm, '')} />  
          </ClaraShortcut>}          
        </div>
        <Mask xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></Mask>        
      </div>  
    </Container>}
  </>);
}