"use client";
import { useEffect, useState } from "react";
import { Content, Container, Text, Thumbnail, Img, Mask, VideoInfo, Title, Views, WrapperMask } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import { HttpService } from "@/services";
import { PlayVideo } from "../BlockShorts/style";
import ModalVideo from 'react-modal-video';

export default function Intro(props: any) {   
  const http = new HttpService();
  const [video, setVideoData] = useState<any>(null);
  const classNames = require('classnames');
  const [isOpen, setOpen] = useState<any>({
    status: false,
    video: null
  });

  useEffect(() => {
    if(props?.data?.field_video_url && props?.data?.field_video_url[0]?.value.indexOf("v=")) {
      let vid = props?.data?.field_video_url[0]?.value.split("v=")[1];
      
      Promise.all([`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${vid}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${vid}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`].map(async (row: any) => {
        let response: any = await http.get(row);
        return response;
      })).then((data) => (
        setVideoData({
          vid: data[1]?.items[0]?.id,
          viewCount: data[0]?.items[0]?.statistics?.viewCount,
          title: data[1]?.items[0]?.snippet?.title,
          thumbnail: data[1]?.items[0]?.snippet?.thumbnails?.high?.url
        })        
      )).catch((e) => {
        if(e?.response?.status == 403) {
          let vid = props?.data?.field_video_url[0]?.value.split("v=")[1];

          setVideoData({
            vid: vid,
            title: props?.data?.field_video_title[0]?.value,
            thumbnail: `https://img.youtube.com/vi/${vid}/0.jpg`
          })      
        }
      });             
    }

    console.log(props)
  }, [props]); 

  return (
    <>
      {props?.data && <Content 
        layout={`${props?.data?.field_layout_intro ? props?.data?.field_layout_intro[0]?.value : 'default'}`}
        data-layout={`${props?.data?.field_layout_intro ? props?.data?.field_layout_intro[0]?.value : 'default'}`} className={props?.data?.type[0]?.target_id}>
        {props?.data?.field_layout_intro && props?.data?.field_layout_intro[0]?.value == 'alternative' && <WrapperMask className="--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBDB33" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></WrapperMask>     }   

        <Container className="container d-flex align-items-start flex-wrap">
          {props?.data?.field_title && <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />}
          {props?.data.field_texto && <Text className="flex-fill" dangerouslySetInnerHTML={{__html: props?.data.field_texto[0]?.value}} />}
          
          {(props?.data.field_imagem && props?.data.field_imagem.length || (video && video?.thumbnail)) && <Thumbnail  
          className={
            classNames(
              "overflow-hidden",
              {
                'is-video': !!video
              }
            )      
          }>
            {!video && <Mask width="368" height="103" viewBox="0 0 368 103" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M493.584 33.6891L462.598 44.2325C432.087 54.704 370.114 75.791 305.151 73.9277C240.189 72.0645 171.287 47.395 106.758 48.3915C42.2285 49.3881 -18.8781 76.1945 -48.9561 89.5258L-79.5094 102.929L-95.101 -0.0228424L-63.2483 -4.84676C-31.8711 -9.59869 31.8341 -19.2465 95.064 -28.8224C158.294 -38.3982 221.999 -48.0461 285.229 -57.6219C348.459 -67.1978 412.164 -76.8456 443.541 -81.5975L475.394 -86.4215L493.584 33.6891Z" fill="#0414A1"/>
            </Mask>}
            
            <Img className="img-fluid" loading="lazy" alt={video && video?.title ? video?.title : props?.data.field_imagem?.alt} src={video && video?.thumbnail ? video?.thumbnail : props?.data.field_imagem[0]?.url} />
            
            {video && <>
              <VideoInfo className="d-flex flex-column">
                <Title>{video?.title}</Title>
                {video?.viewCount && <Views>{video?.viewCount} Views</Views>}
              </VideoInfo>
              <PlayVideo onClick={() => (setOpen({
                status: true,
                video: video?.vid
              }))}  className='d-flex flex-column justify-content-start align-items-end justify-content-lg-center align-items-lg-center' href="#">
                <svg className='d-none d-lg-block' xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                  <path d="M43.8667 26.3161C47.1324 28.136 47.1443 30.4253 43.8667 32.4828L18.541 49.563C15.3588 51.2612 13.1976 50.2585 12.9708 46.584L12.8633 10.8355C12.7916 7.45075 15.5797 6.49444 18.2365 8.11726L43.8667 26.3161Z" stroke="white" strokeWidth="4.05691"/>
                </svg>      
                <svg className='d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M19.998 27.5C21.3814 27.5 22.498 28.6167 22.498 30C22.498 31.3833 21.3814 32.5 19.998 32.5C18.6147 32.5 17.498 31.3833 17.498 30C17.498 28.6167 18.6147 27.5 19.998 27.5ZM17.498 20C17.498 21.3833 18.6147 22.5 19.998 22.5C21.3814 22.5 22.498 21.3833 22.498 20C22.498 18.6167 21.3814 17.5 19.998 17.5C18.6147 17.5 17.498 18.6167 17.498 20ZM17.498 10C17.498 11.3833 18.6147 12.5 19.998 12.5C21.3814 12.5 22.498 11.3833 22.498 10C22.498 8.61667 21.3814 7.5 19.998 7.5C18.6147 7.5 17.498 8.61667 17.498 10Z" fill="white"/>
                </svg>              
              </PlayVideo>
            </>}
          </Thumbnail>}
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
        {props?.data?.field_layout_intro && props?.data?.field_layout_intro[0]?.value == 'alternative' && <WrapperMask className="--bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FBDB33" fillOpacity="1" d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></WrapperMask>         }
      </Content>}    
    </>
  );
};