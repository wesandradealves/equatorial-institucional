"use client";
import { HttpService } from "@/services";
import { Content, Container, Columns } from "./style";
import { Gallery, GalleryItem, Inner, Title, Text, Anchor } from "../Galeria/style";
import { useCallback, useContext, useEffect, useState } from "react";
import { BlockTypo } from "@/types/enums";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import Slider from "react-slick";
import ConfigProvider from "@/context/config";

export default function BlockIniciativas(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const [data, setData] = useState<any>(null);
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
  
  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!blockData) {
      fetchData('/entity/block/block_iniciativas_equatorial').then((response: BlockTypo[] | any) => {
        if(response) {
          let uuid = response?.settings?.id.split("block_content:").pop();
          fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
            if(response) setBlockData(response[0])
          }).catch(console.error);        
        }
      }).catch(console.error);   
    }

    if(!data) {
      fetchData('/api/iniciativas').then((response: any) => {
        if(response && response?.rows) {
          Promise.all(response?.rows.map(async (row: any) => {
            let category: any = await http.get(`/api/taxonomy/${row?.category}`);
            return {
              ...row,
              category: {
                tid: row?.category,
                raw: category?.name[0]?.value
              }
            }
          })).then((data) => setData(data));          
        }
      }).catch(console.error);   
    }    
  }, []); 
  
  return (
    <>{data && blockData && <Content className="block_iniciativas">
      <Container className="container-fluid p-0">
        <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
          {blockData && <Container className="container">
            <BlockHead className="col-12 d-flex flex-column justify-content-center align-items-center p-0" data={blockData} />
          </Container>}
          <Gallery className="col-12">
            <Slider {...settings}>
              {data.map((item: any, index: any) => (
                <GalleryItem key={index} className="overflow-hidden">
                  <Inner background_image={`${config?.basePath}${item?.image}`}>
                    <Anchor className="d-none d-md-flex align-items-center justify-content-center" href={`/iniciativas/${item?.nid}`}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Anchor>
                    <Text className="d-flex flex-column" dangerouslySetInnerHTML={{__html: item?.category?.raw}} />
                    <Title dangerouslySetInnerHTML={{__html: item?.title}} />
                  </Inner>
                </GalleryItem>      
              ))}
            </Slider>
          </Gallery>        
        </Columns>
      </Container>  
    </Content>}</>
  );
};