"use client"; 

import { HttpService } from '@/services';
import { useContext, useEffect, useState } from 'react';
import { BlockTypo, BlockShortsTypo } from '@/types/enums';
import { VideoPill, VideoPillInner, VideoPillTitle, PlayVideo, Content, Container, Columns, Column } from './style';
import React from "react";
import Slider from "react-slick";
import "@/components/BlockShorts/style.scss";
import ModalVideo from 'react-modal-video';
import { Button } from '@/assets/tsx/objects';
import BlockHead from '@/template-parts/BlockHead/BlockHead';
import { Views } from '../Intro/style';
import { fetchData } from '@/app/layout';

export default function BlockShorts(props: any) {
  const http = new HttpService();
  const [blockData, setBlockData] = useState<any>(null);

  const [isOpen, setOpen] = useState<any>({
    status: false,
    video: null
  });

  const [data, setData] = useState<any>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    initialSlide: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2
        }
      },      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]    
  };  

  const fetchShorts = async (channelId: any) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&maxResults=10&order=date`);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching data:', JSON.stringify(error, null, 2));
      return [];
    }
  }; 

  const fetchStatistics = async (data: any) => {
    let results: any = await Promise.all(data.map(async (item: any): Promise<any> => {
      let id = item?.id?.videoId;
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
      const statistics = await response.json();   

      return {
        id: id,
        ...item?.snippet,
        ...statistics?.items[0]?.statistics
      }
    }));   

    return results;
  }     

  useEffect(() => {
    fetchShorts(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID).then((response: any) => {
      if(response?.items) {
        fetchStatistics(response?.items).then((response: any) => {
          if(response) setData(response)
        })        
      }
    })

    fetchData('/entity/block/block_shorts').then((response: BlockTypo[] | any) => {
      if(response) {
        let uuid = response?.settings?.id.split("block_content:").pop();
        fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
          if(response) setBlockData(response[0])
        }).catch(console.error);        
      }
    }).catch(console.error); 
  }, []);   

  return (
    <Content id={props?.id ? props?.id : "BlockShorts"} data-component={props?.id ? props?.id : "BlockShorts"} className='BlockShorts'>
      {blockData && data && data.length > 0 && blockData?.title && <Container className='container'>
        <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-start align-items-lg-start'>
          {blockData && <BlockHead className="col-12 col-lg-5" data={blockData} />}

          <Column className='col-12 col-lg-7'>

            <Slider {...settings}>
              {data.map((row: any, i: any) => (
                <div key={i}>
                  <VideoPill background_image={row?.thumbnails?.high?.url}  >
                    <VideoPillInner className='d-flex flex-column justify-content-end'>
                      <VideoPillTitle className='d-flex flex-column'>
                        {row?.title}

                        {row?.viewCount && <Views>{row?.viewCount} Views</Views>}
                      </VideoPillTitle>

                      {row.url && <PlayVideo onClick={() => setOpen({
                        status: true,
                        video: row?.id
                      })}  className='d-flex flex-column justify-content-start align-items-end justify-content-lg-center align-items-lg-center' href="#">
                        <svg className='d-none d-lg-block' xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                          <path d="M43.8667 26.3161C47.1324 28.136 47.1443 30.4253 43.8667 32.4828L18.541 49.563C15.3588 51.2612 13.1976 50.2585 12.9708 46.584L12.8633 10.8355C12.7916 7.45075 15.5797 6.49444 18.2365 8.11726L43.8667 26.3161Z" stroke="white" strokeWidth="4.05691"/>
                        </svg>      
                        <svg className='d-block d-lg-none' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path d="M19.998 27.5C21.3814 27.5 22.498 28.6167 22.498 30C22.498 31.3833 21.3814 32.5 19.998 32.5C18.6147 32.5 17.498 31.3833 17.498 30C17.498 28.6167 18.6147 27.5 19.998 27.5ZM17.498 20C17.498 21.3833 18.6147 22.5 19.998 22.5C21.3814 22.5 22.498 21.3833 22.498 20C22.498 18.6167 21.3814 17.5 19.998 17.5C18.6147 17.5 17.498 18.6167 17.498 20ZM17.498 10C17.498 11.3833 18.6147 12.5 19.998 12.5C21.3814 12.5 22.498 11.3833 22.498 10C22.498 8.61667 21.3814 7.5 19.998 7.5C18.6147 7.5 17.498 8.61667 17.498 10Z" fill="white"/>
                        </svg>              
                      </PlayVideo>}
                    </VideoPillInner>
                  </VideoPill>
                </div>                  
              ))}
            </Slider>

            {blockData && <span className="d-block mt-5 d-lg-none text-center">
              <Button  href={blockData?.cta_url}>
                {blockData?.cta_label}
                <i className="fa-solid fa-arrow-right"></i>
              </Button>    
            </span>}
          </Column>
        </Columns>
      </Container>}
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
    </Content>
  );
}
