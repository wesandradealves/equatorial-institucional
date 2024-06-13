'use client'
import { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import style from './style.module.scss'
import Image from "next/image"
import logo from '../../../../../assets/img/Logo.svg';

export interface MenusType {
  id:number,
  title:string,
  submenus: Array<string>
}
const menus:MenusType[] = [
  { id:1, title:"Institucional", submenus: ["Sobre a Equatorial", "Transparência", "Leis e normas técnicas", "Leis e normas técnicas", "Notícias", "Grupo Equatorial", "Investidores", "Trabalhe conosco"] },
  { id:2, title:"Sustentabilidade e inovação", submenus: ["Sobre a Equatorial", "Transparência", "Leis e normas técnicas", "Leis e normas técnicas", "Notícias", "Grupo Equatorial", "Investidores", "Trabalhe conosco"] }
]

const dropdownActive = {
  opacity: 1,
  visibility:'visible'
}
const dropdownClose = {
  opacity: 0,
  visibility: 'hidden'
}

const links = [ "Fale com a gente", "Agência Virtual"]
export default function MenuInstitucionalDeskTop() {
  const ComponentsMenu = () => {
    const [dropDownOpen, setDropDownOpen] = useState({id:0,open:false})
    const handleDropDownOpen = (id:number) => {
      if(dropDownOpen.id === id && dropDownOpen.open) {
        setDropDownOpen({id:0, open: false})
      }else {
        setDropDownOpen({id:id, open: true})
      }
    }
    return menus.map((item:MenusType) => (
      <div
        className={style.dropdown}
        key={item.id}
        onClick={()=>handleDropDownOpen(item.id)}
      >
        <button className={style.dropdownbtn}>{item.title} <MdKeyboardArrowDown size={20}/></button>
        <div
          onMouseLeave={()=>handleDropDownOpen(0)}
          className={style.dropdownContent}
          style={ dropDownOpen.id === item.id && dropDownOpen.open ? dropdownActive : dropdownClose }>
          {item.submenus.map((submenu:string,index) => (
            <p key={index}>{submenu}</p>
          ))}
        </div>
      </div>
    ))
  }
  const ComponentsLink = () => {
    return links.map((item:string, index: number) => (
      <a key={index}>{item}</a>
    ))
  }
  return (
    <div className={style.menucontainer}>
      <div>
        <Image
          src={logo}
          alt="logo"
          width={151}
          height={33}
        />
      </div>
      <div className={style.sectionNav}>
        <ComponentsMenu/>
        <ComponentsLink/>
      </div>
      <div className={style.sectionSearch}>
        <MdOutlineSearch size={20}/>
        <input type="text"  placeholder='Digite sua busca'/>
      </div>
    </div>
  )
}
