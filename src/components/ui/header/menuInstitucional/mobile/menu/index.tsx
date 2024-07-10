'use client'
import styles from './style.module.scss'
import { MdClose, MdChevronRight, MdOutlineSearch, MdExpandLess, MdAccessibilityNew, MdCallMade, MdOutlineArrowBack } from 'react-icons/md';
import { useContext, useState } from 'react';
import Image from "next/image"
import { MenuDrawerContext } from '../../../../../../../utils/Context/MenuDrawerContext/menuDrawerContext';
import IconTranslate from 'assets/img/Accessibility.svg'

const itensInstitucional = ["Sobre a Equatorial", "Transparência", "Leis e normas técinicas", "Notícias", "Grupo Equatorial", "Investidores", "Trabalhe conosco"]
export function MenuMobile() {
  const { isMenuOpen, closeDrawer } = useContext(MenuDrawerContext)
  const [menuSelected, setSelectedMenu] = useState(0)

  const handlemenu = () => {
    if(menuSelected === 1) {
      return (
        <div className={styles.cardItensMenu}>
          <div>
            <h1>Institucional</h1>
          </div>
          <div className={styles.itensList}>
            {itensInstitucional.map((item, index) => (<p key={index}>{item}</p>))}
          </div>
        </div>
      )
    }
    if(menuSelected === 2) {
      return (
        <div className={styles.cardItensMenu}>
          <div>
            <h1>Sustentabilidade e inovação</h1>
          </div>
          <div className={styles.itensList}>
            {itensInstitucional.map((item, index) => (<p key={index}>{item}</p>))}
          </div>
        </div>
      )
    }
    return (
      <div className={styles.cardItensMenu}>
        <div onClick={()=>setSelectedMenu(1)}>
          <h1>Institucional</h1>
          <button>
            <MdChevronRight size={24} />
          </button>
        </div>
        <div onClick={()=>setSelectedMenu(2)}>
          <h1>Sustentabilidade e inovação</h1>
          <button>
            <MdChevronRight size={24} />
          </button>
        </div>
        <div>
          <h1>Fale com a gente</h1>
        </div>
        <div>
          <h1>Agência Virtual</h1>
          <MdCallMade size={24} />
        </div>
      </div>
    )
  }
  const backArrow = () => {
    if(menuSelected) {
      return (
        <MdOutlineArrowBack size={30} color='white' onClick={()=>setSelectedMenu(0)}/>
      )
    }
    return (
      <div>
      </div>
    )
  }
  return (
    <div className={styles.containermenu} style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
      <div className={styles.cardHeader}>
        {backArrow()}
        <button onClick={closeDrawer}>
          <MdClose size={20} />
        </button>
      </div>
      {handlemenu()}
      <div className={styles.cardActionsFooter}>
        <div className={styles.buttonSearch}>
          <MdOutlineSearch size={18} color="#0414a1" />
          <p>Digite sua busca</p>
        </div>
        <div className={styles.safeActions}>
          <div>
            <p>Você está no Maranhão</p>
            <MdExpandLess size={20}/>
          </div>
          <div>
            <Image
              src={IconTranslate}
              alt="logo"
              width={50}
            />
            <MdAccessibilityNew size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}
