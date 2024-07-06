"use client"; 

import { HttpService } from '@/services';
import { Content, Container, Columns, Column } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { BlockTypo, BlockShortsTypo } from '@/types/enums';
import { BlockTitle, BlockHeading, VideoPill, VideoPillInner, VideoPillTitle, PlayVideo } from './styles';
import Button from '@/components/ui/actions/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "@/components/block_shorts/style.scss";
import ModalVideo from 'react-modal-video';

export default function BlockShorts(props: any) {
  const http = new HttpService();
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const [data, setContentData] = useState<BlockShortsTypo[] | {} | any>(null);
  const [isOpen, setOpen] = useState<any>({
    status: false,
    video: null
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 2,
    initialSlide: 1,
    mobileFirst: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]    
  };  

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!blockData) {
      fetchData('/entity/block/block_shorts').then((response: BlockTypo[] | any) => {
        if(response) {
          let uuid = response?.settings?.id.split("block_content:").pop();
          fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
            if(response) setBlockData(response.shift())
          }).catch(console.error);        
        }
      }).catch(console.error);
    }
  }, []);

  useEffect(() => {
    if(blockData) {
      fetchData('/api/config').then((response: any[]) => {
        if(response) {
          const basePath = response?.data?.basePath;
          
          fetchData('/api/taxonomy/videos').then((response: any[]) => {
            if(response) {
              let term = response.find(o => o.name.shift().value = 'Shorts');
              let tid = term.tid.shift().value;

              fetchData(`/api/videos/${tid}`).then((response: BlockTypo[] | any) => {
                if(response) setContentData(response.rows.map(function(row: any, i: number){
                    return {
                      ...row,
                      thumbnail: row.thumbnail ? `${basePath}${row.thumbnail}` : (row.url ? `https://img.youtube.com/vi/${ row.url.split("shorts/")[1] }/0.jpg` : '')
                    };
                }))
              }).catch(console.error);           
            }
          }).catch(console.error);
        }
      }).catch(console.error);
    }
  }, [blockData]);  


  return (
    <Content className='block_shorts'>
      {blockData && data && blockData?.title && <Container className='container'>
        <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-start align-items-lg-start'>
          <BlockHeading className='d-flex flex-column col-12 col-lg-5'>
              <BlockTitle className='text-center text-lg-start' dangerouslySetInnerHTML={{__html: blockData?.title}}></BlockTitle>
              <Button
                className="d-none d-lg-inline-flex"
                label="Ver todas as notícias"
                size="small"
                variant="secondary"
                iconEnabled
              />            
          </BlockHeading>
          <Column className='col-12 col-lg-7'>
            <Slider {...settings}>
              {data.map((row: any, i: any) => (
                <div>
                  <VideoPill backgroundImage={row.thumbnail} key={i} >
                    <VideoPillInner className='d-flex flex-column justify-content-end'>
                      <VideoPillTitle>{row.title}</VideoPillTitle>

                      {row.url && <PlayVideo onClick={() => setOpen({
                        status: true,
                        video: row.url.split("shorts/")[1]
                      })}  className='d-flex flex-column justify-content-start align-items-end justify-content-lg-center align-items-lg-center' href="javascript:void(0)">
                        <svg className='d-none d-lg-block' xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                          <path d="M43.8667 26.3161C47.1324 28.136 47.1443 30.4253 43.8667 32.4828L18.541 49.563C15.3588 51.2612 13.1976 50.2585 12.9708 46.584L12.8633 10.8355C12.7916 7.45075 15.5797 6.49444 18.2365 8.11726L43.8667 26.3161Z" stroke="white" stroke-width="4.05691"/>
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
            <Button
                className="d-block d-lg-none mt-5 m-auto"
                label="Ver todas as notícias"
                size="small"
                variant="secondary"
                iconEnabled
              />             
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
