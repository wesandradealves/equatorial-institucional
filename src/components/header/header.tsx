"use client"; // This is a client component 👈🏽

import MenuInstitucional from "@/components/ui/header/menuInstitucional";
import Image from 'next/image'
import Status from "@/components/ui/header/status/status";
import Accessibility from "@/components/ui/header/accessibility/accessibility";
import {useState} from "react";
import ServiceCard from "@/components/ui/patterns/card/service-card/service-card";
import StateSelector from "@/components/ui/header/stateSelector";
import imagemClaraPose from '@/assets/img/imagemClaraPose.svg'
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.scss"

export default function Header():JSX.Element {
    const [activePlusServices, setActivePlusServices] = useState(false)
    const [listaService, setListaService] = useState([{id:1,title:'Emitir segunda via da conta',icon:'file_copy'},
        {id:2,title:'Informar falta de luz',icon:'flash_off'},{id:3,title:'Solicitar religação',icon:'lightbulb_outline'},{id:4,title:'Passar a conta para seu nome',icon:'supervisor_account'},{id:5,title:'Entender a sua conta de luz',icon:'flash_on'},
        {id:6,title:'Todos os serviços',icon:'grid_view'}
    ])
    const listaMenu = [{id:1, title: 'Todos'},{id:2, title: 'Serviços de energia'},{id:3, title: 'Serviços de pagamento'},{id:4, title: 'Consultas'},{id:5, title: 'Dados cadastrais'},]

    const handleClickPlus = ()=> {
        setActivePlusServices(!activePlusServices)
    }

    return (
        <header className="header">
            <div className="accessbilitySection">
                <div className="container d-flex flex-row align-items-center justify-content-between">
                    <Status/>
                    <Accessibility/>
                </div>
            </div>            
            <MenuInstitucional />
        </header>
    )
}