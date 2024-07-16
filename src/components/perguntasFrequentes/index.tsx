"use client"
import Collapse from '@/components/ui/inputs/Collapse';
import { Button } from '@/assets/tsx/objects';
import { HttpService } from "@/services";
import {useContext, useEffect, useState} from "react";
import {BlockTypo, FooterData} from "@/types/enums";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import LanguageProvider from "@/components/LanguageSwitcher/context";
import { Column, Content, Columns, Container, Mask } from "./style"

interface FAQ {
    title: string,
    body: string
}

interface ClaraImage {
    img:string
    pt:string,
    eng:string
}

export function PerguntasFrequentes() {
    const http = new HttpService()
    const { lang } = useContext<any>(LanguageProvider);
    const [listFaq, setListFaq] = useState<FAQ[]>([])
    const [claraData, setClaraData] = useState<ClaraImage|any>();
    const [blockData, setBlockData] = useState<BlockTypo[] | {} | any>(null)
    const [selectedMenu, setSelectedMenu] = useState<number>(-1)

    const fetchData = async (uri: any) => {
        let response: any[] = await http.get(uri);
        return response;
    };

    useEffect(() => {
        buscarFaq()
        handleFooter()

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
    }, []);
    const buscarFaq = async () => {
        const result:FAQ[] = await http.get('/api/faq?items_per_page=3')
        setListFaq(result);
    }

    const handleAlterExpandState = (indexCollpse: number) => {
        if (selectedMenu === indexCollpse) {
            setSelectedMenu(-1);
        } else {
            setSelectedMenu(indexCollpse);
        }
    }

    const handleFooter = () => {
        fetchData('/api/footer')
            .then((footer: FooterData | any) => {
                if(footer && footer.data?.contact?.talktoclara) setClaraData(footer.data.contact.talktoclara)
            })
    }
    const handleClaraImg = () => {
        if(claraData) {
            return(
                <img alt={claraData[lang?.key.replace("-","_")]} src={claraData?.img}/>
            )
        }
    }
    return (
        <Content className='perguntas-frequentes'>
            <Container className="container display: inline-bloc">
                <Columns className="d-flex  align-items-center flex-wrap gap-5">
                    {blockData && <BlockHead data={blockData} className="col-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-md-start px-5"/>}
                    <Column className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-start align-content-end'>
                        {handleClaraImg()}
                    </Column>
                    <Column className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 d-flex flex-wrap'>
                        {listFaq && <Column>
                            {listFaq.map((item, index) => (
                                <Collapse
                                    key={index}
                                    title={item.title}
                                    description={item.body}
                                    alterExpandState={() => handleAlterExpandState(index)}
                                    expandState={selectedMenu === index}
                                />
                            ))}
                        </Column>}
                        <Button className='me-auto' bgColor='colorNeutral100' borderColor='colorPrimary300' fontColor='colorPrimary300' href={""}>
                            Ver mais perguntas
                            <i className="fa-solid fa-arrow-right"></i>
                        </Button>
                    </Column>
                </Columns>
            </Container>
        </Content>
    )
}

export default PerguntasFrequentes
