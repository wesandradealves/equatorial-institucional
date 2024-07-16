"use client"

import { HttpService } from "@/services"
import { BlockTypo } from "@/types/enums"
import { useEffect, useState } from "react"
import { Img, Content, Container, Inner } from "./style"
import BlockHead from "@/template-parts/BlockHead/BlockHead"
import Accordion from "../Accordion/Accordion"
import { Button } from "@/assets/tsx/objects"

export default function PerguntasFrequentes(props: any) {  
    const http = new HttpService()
    const [data, setData] = useState<any>(null)
    const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null)

    const fetchData = async (uri: any) => {
        let response: any[] = await http.get(uri);
        return response;
    };

    useEffect(() => {
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
    }, []);

    return (
        <>
            {data && <Content className='perguntas-frequentes overflow-hidden'>
                <Container className="container d-flex flex-column align-items-end">
                    {blockData && <BlockHead hideButton={true} className="col-12 d-flex align-items-start justify-content-start text-align-start" data={blockData} />}   
                    <Container className="container col-12 col-xxl-8 d-flex flex-column align-items-end ps-0 pe-0">
                        <Inner className="col-12 col-lg-8 d-flex flex-column">
                            {data && data[1] && <Accordion className="col-12" data={data[1]} />}
                            {blockData && <Button className="me-auto" href={blockData?.cta_url}>
                                {blockData?.cta_label}
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>}   
                        </Inner>
                    </Container>
                    {data[0] && data[0] && data[0].data?.contact?.talktoclara?.img && <Img loading="lazy" className="img-fluid" src={data[0].data?.contact?.talktoclara?.img} />}
                </Container>
            </Content>}  
        </>
    )
}