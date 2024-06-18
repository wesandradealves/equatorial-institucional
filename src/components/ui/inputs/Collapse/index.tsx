'use client';
import './collapse.scss';
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
    setCollapsClass(`collapsibleBase ${box ? 'collapsibleBaseBox' : ''}`);
  }, [box]);

  return (
      <div>
          <div className={`collapse-panel ${collapsState ? 'collapse-panel-active' : ''}`}>
              <button
                  type="button"
                  className={collapsClass}
                  onClick={() => setCollapseState(!collapsState)}
                  aria-expanded={collapsState}
                  style={{color: textColor}}
              >
                  <span>{title}</span>
                  {collapsState ? <MdKeyboardArrowUp size={30} color={iconColor}/> :
                      <MdKeyboardArrowDown size={30} color={iconColor}/>}
              </button>
          </div>
          <div className={`collapse-content ${collapsState ? 'collapse-content-active' : ''}`}>
              <div>
                  {description && <p>{description}</p>}
                  {children}
              </div>
          </div>
      </div>
  );
}
