"use client"
import styles from './style.module.scss'
import Image from 'next/image'
import imagemClaraPose from '@/assets/img/imagemClaraPose.svg';
import {HttpService} from "@/services";
import {useEffect, useState} from "react";

interface FAQ {
    title:string,
    body: string
}
export function PerguntasFrequentes(){
    const http = new HttpService()
    const [listFaq, setListFaq] = useState<FAQ[]>([])
    const buscarFaq = async() => {
        const result:FAQ[] = await http.get('/api/faq?items_per_page=3')
        setListFaq(result);
    }

    useEffect(() => {
        buscarFaq()
    }, []);
  return (
    <div className={styles.container}>
      <div className={styles.cotainerPrincipal}>
          <div className={styles.containerSection1}>
              <h1>Perguntas frequentes</h1>
              <div className={styles.estiloImagem}>
                  <Image
                      src={imagemClaraPose}
                      alt='imagemClaraPose'
                      sizes="100vw"
                      style={{
                          height: '100%'
                      }}
                  />
              </div>
          </div>
          <div className={styles.containerlistMenu}>
              <div className={styles.listMenu}>
                  {/* {listFaq.map((item,index) => (
                      <Collapse key={index} title={item.title} description={item.body}/>
                  ))} */}
                </div>
                {/* <Button label='Ver mais perguntas' variant='outline'/> */}
        </div>
      </div>
    </div>
  )
}

export default PerguntasFrequentes
