"use client";
import { useContext, useEffect, useState } from "react";
import { Content, Gallery, GalleryItem, Inner, Title, Subtitle, Anchor, Info, Text } from "./style";
import { HttpService } from "@/services";
import Slider from "react-slick";
import ConfigProvider from "@/context/config";

export default function Galeria(props: any) {
  const http = new HttpService();
  const [gallery, setGallery] = useState<any>(null);
  const { config } = useContext<any>(ConfigProvider);
  const classNames = require('classnames');
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1  
  };  

  useEffect(() => {
    if(props?.data?.field_galeria) {

      let galeria = props?.data?.field_galeria.map(function(row: any){
          return row.target_id
      });

      Promise.all(galeria.map(function(pid: any) {
        return http.get(`/entity/paragraph/${pid}`);
      })).then((response: any) => {
        setGallery(response)
      }).catch(console.error);      
    } else {
      setGallery(props?.data);
    }
  }, [props]); 
  
  useEffect(() => {
    if(gallery) console.log(gallery)
  }, [gallery]);  
  
  return (
    <>{gallery && config && 
      <Content className={props?.data?.type ? props?.data?.type[0]?.target_id : "col-12"}>
        <Gallery className="col-12">
          <Slider {...settings}>
            {gallery.map((item: any, index: any) => (
              <GalleryItem key={index} className="overflow-hidden">
                <Inner background_image={item?.image ? `${config?.basePath}${item?.image}` : item?.field_imagem[0]?.url}>
                  {item?.field_link && <Anchor className="d-none d-md-flex align-items-center justify-content-center" href={item?.field_link[0]?.value}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Anchor>}

                  <Subtitle className="d-flex flex-column" dangerouslySetInnerHTML={{__html: item?.field_subtitulo ? item?.field_subtitulo[0]?.value : (item?.category ? item?.category?.raw : item?.field_texto[0]?.value)}} />
                  
                  <Info className="d-flex flex-column">
                    <Title dangerouslySetInnerHTML={{__html: item?.field_title ? (item?.field_title[0] ? item?.field_title[0]?.value : item?.field_title) : item?.title}} />
                    {((item?.field_subtitulo && item?.field_texto) || item?.body) && <Text className="d-none d-md-block" dangerouslySetInnerHTML={{__html: item?.body ? `${item?.body.substr(0, 100)}...` : item?.field_texto[0]?.value }} />}
                  </Info>
                </Inner>
              </GalleryItem>      
            ))}
          </Slider>
        </Gallery>
      </Content>}
    </>
  );
};