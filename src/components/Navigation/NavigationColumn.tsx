import React, { useCallback, useEffect, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';

export default function NavigationColumn(props: NavColTypo) {
  const [isExpanded, setExpand] = useState<any>(false);
  const [scrollPosition, setScroll] = useState<any>(false);
  const classNames = require('classnames');

  const handleScroll = () => {
    setScroll(window.scrollY);
  }; 
  
  useEffect(() => {
    if(scrollPosition > 0) setExpand(false)
  }, [scrollPosition]);  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);    
  }, []);

  return (
    <>
      <NavCol className={
        classNames(
          `nav-col ${props?.className}`,
          {
            'is-expanded': !!isExpanded
          }
        )      
      }>
        <NavItem className="nav-item d-flex flex-column">
          <NavLink className="nav-link d-flex align-items-center justify-content-between" >
            {props?.data?.title} 
            
            {props?.data?.below && <Arrow onClick={() => {
              setExpand(!isExpanded);
            }} className={`fa-solid fa-angle-${isExpanded ? 'up' : 'down'}`} />}
          </NavLink>

          {props?.data?.below && <NavSubmenu className={`d-${isExpanded ? 'flex' : 'none'} nav-submenu flex-column`}>
            {props?.data?.below.map(function(row: any, i: number){
                return (
                  <NavItem className='nav-item' key={i}>
                    <NavLink className='nav-link' href={row?.absolute.replace(process.env.NEXT_PUBLIC_BASE_URL, "")}>{row?.title}</NavLink>
                  </NavItem>
                );
            })}    
          </NavSubmenu>}        
        </NavItem>
      </NavCol>  
    </>
  )
}