"use client";
import { HttpService } from "@/services";
import { useCallback, useContext, useEffect, useState } from "react";
import { BlockTypo } from "@/types/enums";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import Slider from "react-slick";
import ConfigProvider from "@/context/config";
import { Container, Content, Columns, Filter, FilterLink, Item, Inner, Thumbnail, Info, Text, Category, Title, Logo, Top, Bottom } from './style';
import logo from '@/assets/img/logo.svg';
import { Button } from "@/assets/tsx/objects";
import { fetchData } from "@/utils";

export default function BlockInstitucionalEquatorial(props: any) {
  const { config } = useContext<any>(ConfigProvider);
  const http = new HttpService();
  const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null);
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>(null);
  const [currentFilter, setCurrentFilter] = useState<any>(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    initialSlide: 1,
    slidesToScroll: 1  
  }; 
  
  const classNames = require('classnames');

  useEffect(() => {
    if(!blockData) {
      fetchData('/entity/block/block_institucional_equatorial').then((response: BlockTypo[] | any) => {
        if(response) {
          let uuid = response?.settings?.id.split("block_content:").pop();
          fetchData(`/api/blocks/${uuid}`).then((response: BlockTypo[]) => {
            if(response) setBlockData(response[0])
          }).catch(console.error);        
        }
      }).catch(console.error);   
    }

    if(!filter) {
      fetchData('/api/taxonomy/solucoes').then((response: any) => {
        if(response) setFilter(response)
      }).catch(console.error);   
    }

    if(!data && config && filter) {
      fetchData(`/api/solucoes/${filter[0]?.tid[0]?.value}`).then((response: any) => {
        if(response && response?.rows) {
          Promise.all(response?.rows.map(async (row: any) => {
            let category: any = await http.get(`/api/taxonomy/${row?.category}`);
            return {
              ...row,
              image: `${config?.basePath}${row?.image}`,
              category: {
                tid: row?.category,
                raw: category?.name[0]?.value
              }
            }
          })).then((data) => setData(data));
        }
      }).catch(console.error);  
    }    
  }, [config]);

  return (
    <>
    {
      data && filter && <Content data-component={props?.id ? props?.id : "BlockInstitucionalEquatorial"} className={props?.id ? props?.id : "BlockInstitucionalEquatorial"}>
        <Container className='container-fluid p-0'>
          <Columns className='d-flex flex-wrap flex-column justify-content-center align-items-center'>
              {blockData && <Container className="container">
                <BlockHead className="col-12 d-flex flex-column justify-content-center align-items-center p-0" data={blockData} />
              </Container>}

              {filter && <Filter className="d-flex overflow-auto col-12 align-items-center justify-content-lg-center">
                {filter.map((row: any, index: any) => (
                  <FilterLink 
                  data-tid={row?.tid[0]?.value}
                  className={
                    classNames(
                      {
                        'current': index == currentFilter
                      }
                    )      
                  }                
                  onClick={() => (
                    setCurrentFilter(index),
                    fetchData(`/api/solucoes/${row?.tid[0]?.value}`).then((response: any) => {
                      if(response && response?.rows) {
                        Promise.all(response?.rows.map(async (row: any) => {
                          let category: any = await http.get(`/api/taxonomy/${row?.category}`);
                          return {
                            ...row,
                            image: `${config?.basePath}${row?.image}`,
                            category: {
                              tid: row?.category,
                              raw: category?.name[0]?.value
                            }
                          }
                        })).then((data) => setData(data));          
                      }
                    }).catch(console.error)                  
                  )} key={index}>
                    {row?.name[0]?.value}
                  </FilterLink>
                ))} 
              </Filter>}

              {data && <Container className="container-fluid slick p-0">
                <Slider {...settings}>
                  {data.map((row: any, index: any) => (
                    <Item key={index}>
                      <Inner className="d-flex overflow-hidden flex-column flex-md-row align-items-stretch flex-wrap">
                        {row?.image && <Thumbnail background_image={row?.image} />}
                        <Info className="flex-fill d-flex text-center text-md-start justify-content-center justify-content-start flex-column flex-wrap">
                          {row?.category && <Top className="d-flex align-items-center text-md-start justify-content-center justify-content-start justify-content-md-between">
                            <Category>{row?.category?.raw}</Category>
                            <Logo className="img-fluid d-none d-md-block" loading="lazy" src={logo?.src} />
                          </Top>}
                          <Bottom className="mt-md-auto d-flex flex-column">
                            <Title>{row?.title}</Title>
                            {(row?.summary) && <Text dangerouslySetInnerHTML={{__html: `${row?.summary.substr(0, 400)}...`}} />}
                            <Button className="me-md-auto mt-auto" href={row?.nid}>
                              Descubra nossos serviços
                            </Button> 
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
