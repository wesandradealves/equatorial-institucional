'use client'
import style from './collapse.module.scss'
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
export interface CollapseProps {
  title: string,
  description: string,
  box?:boolean
}
export default function Collapse(props:CollapseProps){
  const [collapsState, setCollapseState] = useState(false)
  const [collapsClass, setCollapsClass] = useState<string>()
  const buildComponent = () => {
    getCollapseClass()
  }

  const getCollapseClass = () => {
    const { box } = props
    setCollapsClass(`${style.collapsibleBase}
    ${box ? style.collapsibleBaseBox : ''}
    `)
  }

  useEffect(() => {
    buildComponent()
  }, [props.title,props.box,props.description]);
  return (
    <div className={style.wrapper}>
      <button type="button" className={collapsClass} onClick={()=>setCollapseState(!collapsState)}>
        <span>{props.title}</span>
        {collapsState ? <MdKeyboardArrowUp size={30}/> : <MdKeyboardArrowDown size={30}/>}
      </button>
      <div className={style.content} style={{display : collapsState ? 'block' : 'none'}}>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
