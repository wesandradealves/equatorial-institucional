'use client';
import style from './collapse.module.scss';
import { useEffect, useState, ReactNode } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export interface CollapseProps {
  title: string,
  description?: string,
  box?: boolean,
  textColor?: string,
  iconColor?: string,
  backgroundColor?: string,
  children?: ReactNode
}

export default function Collapse(props: CollapseProps) {
  const { title, description, box, backgroundColor = '#FFFFFF', textColor = 'inherit', iconColor = 'inherit', children } = props;
  const [collapsState, setCollapseState] = useState(false);
  const [collapsClass, setCollapsClass] = useState<string>('');

  useEffect(() => {
    setCollapsClass(`${style.collapsibleBase} ${box ? style.collapsibleBaseBox : ''}`);
  }, [box]);

  return (
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
        <div className={style.content} style={{ display: collapsState ? 'block' : 'none', color: textColor, backgroundColor: backgroundColor, position: 'relative' }}>
          {description && <p>{description}</p>}
          {children}
        </div>
      </div>
  );
}
