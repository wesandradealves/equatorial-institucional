import { Content, Container, Columns, Filter, FilterLink, Item, Inner, Thumbnail, Info, Text, Category, Title, Logo, Top, Bottom } from '@/components/BlockInstitucionalEquatorial/style';
import { useContext, useEffect, useState } from 'react';
import BlockHead from '@/template-parts/BlockHead/BlockHead';
import { HttpService } from "@/services";
import Slider from "react-slick";
import { getMedia } from '@/utils';
import ConfigProvider from '@/context/config';

export default function Tabs(props: any) {
  const [tabs, setTabs] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  const http = new HttpService();
  const classNames = require('classnames');
  const [currentFilter, setCurrentFilter] = useState<any>(0);
  const { config } = useContext<any>(ConfigProvider);

  let settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1  
  }; 
  
  const getFullContent = async (data: any) => {
    let content = await Promise.all(
      data.map(async (item: any) => {
        let field_thumbnail = await getMedia(item?.field_thumbnail[0]?.file_id);
        return {
          ...item,
          field_thumbnail: `${config?.basePath}${field_thumbnail}`
        }
      })
    )

    return content;
  }; 

  useEffect(() => {
    if(props?.data) {
      Promise.all(props?.data?.field_list_item?.map(function(item: any) {
        return http.get(`/entity/paragraph/${item?.target_id}`);
      })).then((response: any) => {
        setTabs(response.map(function(item: any) {
          if(item?.field_titulo[0]) return item?.field_titulo[0]?.value
          return [];
        }))

        getFullContent(response).then((response: any) => {
          setContent(response)
        });
      });
    }
  }, []);

  return (
    <>
    {
      tabs && content && <Content data-component={props?.id ? props?.id : "BlockInstitucionalEquatorial"} className={props?.id ? props?.id : "BlockInstitucionalEquatorial"}>
        <Container className='container-fluid p-0'>
          <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
              {props?.data?.field_title && props?.data?.field_title[0]?.value && <BlockHead className="col-12 p-0" data={props?.data} />}

              {tabs && <Filter className="d-flex overflow-auto col-12 align-items-center justify-content-lg-center">
                {tabs.map((row: any, index: any) => (
                  <FilterLink 
                  className={
                    classNames(
                      {
                        'current': index == currentFilter
                      }
                    )      
                  }                
                  onClick={(e: any) => {
                    let dots = e.target.closest('.Tabs').querySelector('[class*="slick-dots"]').childNodes;
                    dots[index].childNodes[0].click()
                    setCurrentFilter(index)                      
                  }} key={index}>{row}</FilterLink>
                ))} 
              </Filter>}

              {content && <Container className="container-fluid slick p-0">
                <Slider {...settings}>
                  {content.map((row: any, index: any) => (
                    <Item key={index}>
                      <Inner className="d-flex overflow-hidden flex-column flex-md-row align-items-stretch flex-wrap">
                        {row?.field_thumbnail && <Thumbnail background_image={row?.field_thumbnail} />}
                        <Info className="flex-fill d-flex text-center text-md-start justify-content-center justify-content-start flex-column flex-wrap">
                          {row?.field_subtitulo && row?.field_subtitulo[0] && <Top className="d-flex align-items-center text-md-start justify-content-center justify-content-start justify-content-md-between">
                            <Category dangerouslySetInnerHTML={{__html: row?.field_subtitulo[0]?.value}} />
                          </Top>}
                          <Bottom className="mt-md-auto d-flex flex-column">
                            {row?.field_title && row?.field_title[0] && <Title dangerouslySetInnerHTML={{__html: row?.field_title[0]?.value}}/>}
                            {row?.field_texto && row?.field_texto[0] && <Text dangerouslySetInnerHTML={{__html: `${row?.field_texto[0]?.value}`}} />}
                          </Bottom>
                        </Info>
                      </Inner>
                    </Item>
                  ))} 
                </Slider>
              </Container>}              
          </Columns>
        </Container>
      </Content>
    }
    </>
  );  
}