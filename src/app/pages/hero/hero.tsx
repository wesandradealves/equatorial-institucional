"use client";
import "./hero.scss"
import MenuInstitucional from "@/components/ui/header/menuInstitucional";
import Image from 'next/image'
import Status from "@/components/ui/header/status/status";
import Accessibility from "@/components/ui/header/accessibility/accessibility";
import {useState} from "react";
import ServiceCard from "@/components/ui/patterns/card/service-card/service-card";
import StateSelector from "@/components/ui/header/stateSelector";
import imagemClaraPose from '@/assets/img/imagemClaraPose.svg'
export function Hero():JSX.Element {
    const [listaService, setListaService] = useState(['item um','item um', 'item um', 'item um','item um','item um'])
    return (
        <div className="container">
            <div className="wrapper">
                <div className="header">
                    <div className="accessbilitySection">
                        <Status/>
                        <Accessibility/>
                    </div>
                    <MenuInstitucional/>
                </div>
                <div className="body">
                   <div className="listaItem">
                       <div className='listaInfo'>
                           <div>
                               <div>
                                   <span>Você está em</span> <StateSelector/>
                               </div>
                               <h1>Como podemos te ajudar hoje?</h1>
                           </div>
                               <div className='boxYellow'>
                                   <div className='imagemClara'>
                                       <Image
                                           src={imagemClaraPose}
                                           alt='imagemClaraPose'
                                           sizes="100vw"
                                           style={{
                                               width:'300px',
                                               height:'128px'
                                           }}
                                       />
                                   </div>
                                   <p>Prefere resolver pelo WhatsApp? <a>Fale com a Clara</a></p>
                               </div>
                       </div>
                       <div className='listaCardService'>
                           {listaService.map((item, index) => (
                               <ServiceCard key={index}/>
                           ))}
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
