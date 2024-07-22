"use client";
import { HttpService } from "@/services";
import { Content, Container, Inner, Item, Title, Text, Info } from "./style";
import { useEffect, useState } from "react";
import { Button } from "@/assets/tsx/objects";
import ModalVideo from 'react-modal-video';
import Slider from "react-slick";

export default function BlockVideos(props: any) {
  const http = new HttpService();
  const [data, setData] = useState<any>(null);
  const [isOpen, setOpen] = useState<any>({
    status: false,
    video: null
  });
  const settings = {
    arrows: false,
    infinite: true,
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
    let endpoints: any[] = ['/api/taxonomy/videos', '/api/videos'];

    if(!data) {
      Promise.all(endpoints.map(function(url: any) {
        return http.get(`${url}`);
      })).then((response: any) => {
        if(response) {
          if(response[0]) {
            var term = response[0].find((o: any) => o?.name[0]?.value.toLowerCase() == 'shorts' );
            if(term) term = term?.tid[0]?.value;
            if(response[1]) {
              let videos = response[1]?.rows.map(function(row: any) {
                return {
                  ...row,
                  'category': parseInt(row?.category)
                };
              }).filter((o: any) => o?.category !== term );
              setData(videos);
            }
          }
        }
      }).catch(console.error);            
    }  
  }, []); 

  useEffect(() => {
    const main: HTMLElement | null = document.getElementById("primary");
    main?.classList.toggle("modal-opened");
    const el: HTMLElement | null = document.getElementById("block_videos");
    const block_shorts: HTMLElement | null = document.getElementById("block_shorts");
    if(el) el.style.zIndex = isOpen.status ? '5' : '1';
  }, [isOpen]);  

  return (
    <>{data && <Content id="block_videos" className="block_videos">
      <Container className="container">
        <Slider {...settings}>
          {data.map((row: any, index: any) => (
            <Item key={index} className="overflow-hidden">
                <Inner className="d-flex flex-column overflow-hidden" background_image={`https://img.youtube.com/vi/${ row.url.split("?v=")[1] }/0.jpg`}>
                  <Text className="d-flex flex-column" dangerouslySetInnerHTML={{__html: row?.body}} />
                  <Info className="d-flex flex-column">
                    <Title dangerouslySetInnerHTML={{__html: row?.title}} />
                    <Button className="me-auto" onClick={() => setOpen({
                        status: true,
                        video: row.url.split("?v=")[1]
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
