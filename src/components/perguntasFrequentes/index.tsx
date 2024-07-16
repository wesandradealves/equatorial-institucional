"use client"
import {Wrapper, ListMenu, Conteudo, Actions, ImagemContainer, Title} from './style'
import Image from 'next/image'
// import imagemClaraPose from '@/assets/img/imagemClaraPose.svg';
import Collapse from '@/components/ui/inputs/Collapse';
import { Button } from '@/assets/tsx/objects';
import { HttpService } from "@/services";
import { useEffect, useState } from "react";

interface FAQ {
    title: string,
    body: string
}

export function PerguntasFrequentes() {
    const http = new HttpService()
    const [listFaq, setListFaq] = useState<FAQ[]>([])
    const [selectedMenu, setSelectedMenu] = useState<number>(-1)


    useEffect(() => {
        buscarFaq()
    }, []);
    const buscarFaq = async () => {
        //const result:FAQ[] = await http.get('/api/faq?items_per_page=3')
        setListFaq([
            { title: 'Item 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            { title: 'Item 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ' },
            { title: 'Item 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
            { title: 'Item 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ' },
            { title: 'Item 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s ' }
        ])
        //setListFaq(result);
    }

    const handleAlterExpandState = (indexCollpse: number) => {
        if (selectedMenu === indexCollpse) {
            setSelectedMenu(-1);
        } else {
            setSelectedMenu(indexCollpse);
        }
    }

    return (
        <Wrapper>
            <Title>
                <h1>Perguntas frequentes</h1>
            </Title>
            <Conteudo>
                {/* <ImagemContainer>
                    <Image
                        src={imagemClaraPose}
                        alt='imagemClaraPose'
                    />
                </ImagemContainer> */}
                <Actions>
                    <ListMenu>
                        {listFaq.map((item, index) => (
                            <Collapse
                                key={index}
                                title={item.title}
                                description={item.body}
                                alterExpandState={() => handleAlterExpandState(index)}
                                expandState={selectedMenu === index}
                            />
                        ))}
                    </ListMenu>
                    <Button className='me-auto' href={""}>
                        Ver mais perguntas
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>                       
                </Actions>
            </Conteudo>
        </Wrapper>
    )
}

export default PerguntasFrequentes
