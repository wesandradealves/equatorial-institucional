"use client"
import {HttpService} from "@/services";
import {Card, Cards, Circle, Column, Container, Content, Mask, Text} from "./style"
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import {useEffect, useState} from "react";
import {BlockTypo} from "@/types/enums";

export default function TextoNumerado(props: any) {
    const http = new HttpService()
    const [data, setData] = useState<any>(null)
    const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null)
    const fetchData = async (uri: any) => {
        return await http.get(uri);
    };
    useEffect(() => {
       if(!data && props?.data?.field_list_item) {
            let items = Promise.all(props?.data?.field_list_item.map(async(row:any) => {
               let item:any = await fetchData(`/entity/paragraph/${row?.target_id}`);
               return item
            })).then(item => {
                setData(item);
            })
            setBlockData(props?.data);
       }
    }, [props]);

    return (
        <>
            {data &&  <Content 
                data-layout={props?.data?.field_layout_texto_enumerado && props?.data?.field_layout_texto_enumerado[0] ? props?.data?.field_layout_texto_enumerado[0]?.value : "default"} 
                layout={props?.data?.field_layout_texto_enumerado && props?.data?.field_layout_texto_enumerado[0] ? props?.data?.field_layout_texto_enumerado[0]?.value : "default"}
                className={`overflow-hidden ${props?.id}`}>
                <Container className='container d-flex flex-column gap-5 overflow-hidden block-objective'>
                    {blockData && <BlockHead className="col-12 d-flex align-items-center
                    justify-content-center text-align-center" data={blockData} />}
                    <Cards className="d-flex flex-wrap flex-column flex-lg-row justify-content-center align-items-stretch">
                        {data && data.map((item:any, index:any) => (
                            <Card key={index} className='d-flex flex-column flex-fill gap-2 overflow-hidden'>
                                {props?.data?.field_layout_texto_enumerado && props?.data?.field_layout_texto_enumerado[0] && props?.data?.field_layout_texto_enumerado[0]?.value !== 'alternative' && <>
                                    <Mask xmlns="http://www.w3.org/2000/svg" width="207" height="72" viewBox="0 0 207 72" fill="none">
                                        <path d="M-31 72L-31 -9.00002L207 -9C163.836 49.8151 122.026 45.314 80.1001 41.0919C43.4824 37.4044 6.77582 33.7241 -31 72Z"
                                    fill="#F6F8FF"/>
                                    </Mask>
                                </>}

                                {props?.data?.field_enable_numbers && props?.data?.field_enable_numbers[0] && props?.data?.field_enable_numbers[0].value && 
                                    <Circle className='d-flex justify-content-center align-items-center'>
                                        {index+1}
                                </Circle>}
                                
                                <Text dangerouslySetInnerHTML={{__html:item.field_body[0].value}} />
                            </Card>
                        ))}
                    </Cards>
                </Container>
            </Content>}
        </>
    )
}
