"use client"

import { HttpService } from "@/services"
import { BlockTypo } from "@/types/enums"
import { useContext, useEffect, useState } from "react"
import { Img, Content, Container, Inner, Mask } from "./style"
import BlockHead from "@/template-parts/BlockHead/BlockHead"
import Accordion from "../Accordion/Accordion"
import { Button } from "@/assets/tsx/objects"
import ConfigProvider from "@/context/config"
import { fetchData } from "@/utils";
import FaqFilter from "./FaqFilter"

export default function Faq(props: any) {  
    const { config } = useContext<any>(ConfigProvider);
    const http = new HttpService()
    const [data, setData] = useState<any>(null)
    const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null)
    const classNames = require('classnames');

    useEffect(() => {
        if(!props?.data) {
            if(!blockData) {
                fetchData("/entity/block/block_faq")
                .then((response: BlockTypo[] | any) => {
                    if(response) {
                        let uuid = response?.settings?.id.split("block_content:").pop();
                        fetchData(`/api/blocks/${uuid}`)
                            .then((response: BlockTypo[]) => {
                                if (response) setBlockData(response.shift());
                            })
                            .catch(console.error);
                    }
                })
                .catch(console.error);
            }

            if(!data) {
                let endpoints = ['/api/footer', '/api/faq'];
    
                Promise.all(endpoints.map(function(url: any) {
                    return http.get(`${url}`);
                })).then((response: any) => {
                    if(response) setData(response)
                }).catch(console.error);    
            }            
        } else {
            setBlockData(props?.data)

            console.log(props?.data)

            if(props?.data?.field_faq_enable && props?.data?.field_faq_enable.length) {
                fetchData(`/api/faq`)
                .then((response: BlockTypo[]) => {
                    setData(response)
                })
                .catch(console.error);
            } else {
                Promise.all(props?.data?.field_list_item.map(async (row: any) => {
                    let item: any = await http.get(`/entity/paragraph/${row?.target_id}`);
                    return item
                })).then((data) => setData(data));   
            }
        }
    }, []);

    return (
        <>
            {data && <Content 
                nobackground={props?.data?.field_no_background ? `${props?.data?.field_no_background[0]?.value}` : null}
                data-layout={`${props?.data?.field_layout && props?.data?.field_layout[0] ? props?.data?.field_layout[0]?.value : 'default'}`} 
                data-component={props?.id ? props?.id : "Faq"}
                className={`${props?.id ? props?.id : "Faq"} overflow-hidden`}>
                <Container 
                    className={
                        classNames(
                        "container d-flex flex-column align-items-end",
                            {
                                'pt-0': props?.data?.field_no_background && props?.data?.field_no_background[0]?.value
                            }
                        )      
                    }>
                    {blockData && <BlockHead hideButton={true} className="col-12 d-flex align-items-start justify-content-start text-start" data={blockData} />}   
                    <Container 
                    className={
                        classNames(
                        "container col-12 d-flex flex-column col-xxl-8",
                            {
                                'pt-0': props?.data?.field_no_background && props?.data?.field_no_background[0]?.value,
                                'ps-0 pe-0 align-items-end': !props?.data || (props?.data?.field_layout && props?.data?.field_layout[0] && props?.data?.field_layout[0]?.value == 'home'),
                            }
                        )      
                    }>
                        <Inner 
                            className={
                                classNames(
                                "col-12 d-flex flex-column",
                                    {
                                        'col-lg-8': !props?.data || (props?.data?.field_layout && props?.data?.field_layout[0] && props?.data?.field_layout[0]?.value == 'home'),
                                    }
                                )      
                            }
                            >
                            {data && <Accordion className="col-12 overflow-auto" data={!props?.data ? data[1] : data} />}
                            {blockData && (blockData?.cta_label || blockData?.cta_url) && <Button className="me-auto" href={blockData?.cta_url}>
                                {blockData?.cta_label}
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>}   
                        </Inner>
                    </Container>
                    {((config && props?.data?.field_layout && props?.data?.field_layout[0] && props?.data?.field_layout[0]?.value == 'home') || !props?.data?.field_layout) && <Img loading="lazy" className="img-fluid" src={config?.clara_img} />}
                </Container>
                <Mask 
                    className={
                        classNames(
                        "d-block",
                            {
                                'compact': !!props?.data || (props?.data?.field_layout && props?.data?.field_layout[0] && props?.data?.field_layout[0]?.value !== 'compact'),
                                'd-none': props?.data?.field_no_background && props?.data?.field_no_background[0]?.value,
                            }
                        )      
                    }                
                    width="1920" height="930" viewBox="0 0 1920 930" fill="none" xmlns="http://www.w3.org/2000/Mask">
                    <path d="M1920 930V0C1260.76 346.549 661.963 -0.360321 0 286.389L6.5096e-05 930H1920Z" fill="#F6F8FF"/>
                </Mask>
            </Content>}  
        </>
    )
}
