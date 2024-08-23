"use client";
import { Content, Container, Inner, Item, Title, Text, Info } from "./style";
import { useEffect, useState } from "react";
import { Button } from "@/assets/tsx/objects";
import ModalVideo from 'react-modal-video';
import Slider from "react-slick";
import { fetchVideos, fetchStatistics } from "../BlockShorts/BlockShorts";

export default function BlockVideos(props: any) {
  const [isOpen, setOpen] = useState<any>({
    status: false,
    video: null
  });
  const [data, setData] = useState<any>(null);
  const settings = {
    arrows: false,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      }
    ]  
  };    

  useEffect(() => {
    fetchVideos(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID).then((response: any) => {
      if(response?.items) {
        fetchStatistics(response?.items).then((response: any) => {
          if(response) setData(response)
        })        
      }
    })
  }, []);     

  useEffect(() => {
    const main: HTMLElement | null = document.getElementById("primary");
    main?.classList.toggle("modal-opened");
    const el: HTMLElement | null = document.getElementById("BlockVideos");
    if(el) el.style.zIndex = isOpen.status ? '5' : '1';
  }, [isOpen]);  

  return (
    <>{data && <Content id={props?.id ? props?.id : "BlockVideos"} className={props?.id ? props?.id : "BlockVideos"}>
      <Container className="container">
        <Slider {...settings}>
          {data.map((row: any, index: any) => (
            <Item data-id={row?.id} key={index} className="overflow-hidden">
                <Inner className="d-flex flex-column overflow-hidden" background_image={row?.thumbnails?.high?.url}>
                  {/* <Text className="d-flex flex-column" dangerouslySetInnerHTML={{__html: row?.body}} /> */}
                  <Info className="d-flex flex-column">
                    <Title dangerouslySetInnerHTML={{__html: row?.title}} />
                    <Button className="me-auto" onClick={() => setOpen({
                        status: true,
                        video: row?.id
                      })}>
                      Saiba como usar
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>  
                  </Info>
                </Inner>
            </Item>      
          ))}
        </Slider>
      </Container>  
      <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen.status}
				videoId={isOpen.video}
				onClose={() => setOpen({
          status: false,
          video: null
        })} 
			/>       
    </Content>}</>
  );
};
