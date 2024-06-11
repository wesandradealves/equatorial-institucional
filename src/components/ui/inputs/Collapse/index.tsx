'use client';
import style from './collapse.module.scss';
import { useEffect, useState, ReactNode } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export interface CollapseProps {
  title: string,
<<<<<<< Updated upstream
  description: string,
  box?:boolean
  textColor?:string
  colorIcon?:string
=======
  description?: string,
  box?: boolean,
  textColor?: string,
  iconColor?: string,
  children?: ReactNode
>>>>>>> Stashed changes
}

export default function Collapse(props: CollapseProps) {
  const { title, description, box, textColor = 'inherit', iconColor = 'inherit', children } = props;
  const [collapsState, setCollapseState] = useState(false);
  const [collapsClass, setCollapsClass] = useState<string>('');

  useEffect(() => {
    setCollapsClass(`${style.collapsibleBase} ${box ? style.collapsibleBaseBox : ''}`);
  }, [box]);

  return (
<<<<<<< Updated upstream
    <div className={style.wrapper}>
      <button type="button" style={{color:props.textColor}} className={collapsClass} onClick={()=>setCollapseState(!collapsState)}>
        <span>{props.title}</span>
        {collapsState ? <MdKeyboardArrowUp color={props.colorIcon} size={30}/> : <MdKeyboardArrowDown color={props.colorIcon} size={30}/>}
      </button>
      <div className={style.content} style={{display : collapsState ? 'block' : 'none'}}>
        <p>{props.description}</p>
=======
      <div className={style.wrapper}>
        <button
            type="button"
            className={collapsClass}
            onClick={() => setCollapseState(!collapsState)}
            aria-expanded={collapsState}
            style={{ color: textColor }}
        >
          <span>{title}</span>
          {collapsState ? <MdKeyboardArrowUp size={30} color={iconColor} /> : <MdKeyboardArrowDown size={30} color={iconColor} />}
        </button>
        <div className={style.content} style={{ display: collapsState ? 'block' : 'none', color: textColor }}>
          {description && <p>{description}</p>}
          {children}
        </div>
>>>>>>> Stashed changes
      </div>
  );
}
