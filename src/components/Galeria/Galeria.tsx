"use client";
import { useEffect, useState } from "react";
import { Content, Gallery, GalleryItem, Inner, Title, Text, Anchor } from "./style";
import { HttpService } from "@/services";
import Slider from "react-slick";

export default function Galeria(props: any) {
  const http = new HttpService();
  const [gallery, setGallery] = useState<any>(null);

  const settings = {
    dots: false,
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
    }
  }, [props]);    
    
  return (
    <>{props?.data?.field_galeria && <Content className={props?.data?.type[0]?.target_id}>
    {gallery && <Gallery>
      <Slider {...settings}>
        {gallery.map((item: any, index: any) => (
          <GalleryItem key={index} className="overflow-hidden">
            <Inner background_image={item?.field_imagem[0]?.url}>
              <Anchor className="d-none d-md-flex align-items-center justify-content-center" href={item?.field_link[0]?.value}>
                <i className="fa-solid fa-arrow-right"></i>
              </Anchor>
              <Text className="d-flex flex-column" dangerouslySetInnerHTML={{__html: item?.field_texto[0]?.value}} />
              <Title dangerouslySetInnerHTML={{__html: item?.field_title[0]?.value}} />
            </Inner>
          </GalleryItem>      
        ))}
      </Slider>
    </Gallery>}
  </Content>}</>
  );
};