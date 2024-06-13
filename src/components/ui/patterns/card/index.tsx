'use client'
import './style.scss'
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useEffect, useState } from 'react';
export interface CardBaseProps {
  title:string,
  subTitle:string,
  disable?:boolean,
  label?:string
}

export default function CardBase(props:CardBaseProps) {
  const [cardClass, setCardClass] = useState<string>("cardStyle")
  const [cardSelected, setCardSelected] = useState(false);
  const getButtonClass = () => {
    const { disable } = props

    setCardClass(`
      cardStyle
      ${disable ? `cardStyle--disable` : ''}
      ${cardSelected ? `cardStyle--selected` : ''}
    `)
    console.count('called')
  }
  const handleOver = () => {
    const { disable } = props
    setCardClass(`
      ${cardClass}
      ${disable ? '' : 'cardStyle--hover'}
      ${cardSelected ? `cardStyle--selected` : ''}
    `)
  }

  const handleLeave = () => {
    const { disable } = props
    setCardClass(`
      cardStyle
      ${disable ? `cardStyle--disable` : ''}
      ${cardSelected ? `cardStyle--selected` : ''}
    `)
  }
  const buildCardBase =  ()=> {
    getButtonClass()
  }

  useEffect(() => {
    buildCardBase();
}, [props.disable]);

  useEffect(() => {
    cardSelected ? setCardClass(cardClass + 'cardStyle--selected') : setCardClass(cardClass)
  }, [cardSelected]);

  return (
    <div className={cardClass} onClick={()=>setCardSelected(!cardSelected)} onMouseEnter={handleOver} onMouseLeave={handleLeave}>
      <p className='labelCard'>{props.label || 'Primary'}</p>
      <div className='cardContent'>
        <h4>{props.title}</h4>
        <MdOutlineAddCircleOutline size={28}/>
      </div>
      <p className='textSubtitle'>{props.subTitle}</p>
    </div>
  )
}
