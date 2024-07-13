import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';

export default function NavigationColumn(props: NavColTypo) {
  const [isExpanded, setExpand] = useState<any>(false);
  const [scrollPosition, setScroll] = useState<any>(false);
  const classNames = require('classnames');
  const ref = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY);
  }; 
  
  useEffect(() => {
    if(scrollPosition > 0) setExpand(false)
  }, [scrollPosition]);  

  const useOutsideAlerter = useCallback((ref: any) => {
    function handleClickOutside(event: any) {
      if(!event.target.closest("header")) {
        if(Array.from(ref.current.classList).includes("is-expanded")) {
          setExpand(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);    
  }, []);

  useEffect(() => {
    useOutsideAlerter(ref);
  }, [ref]);

  return (
    <>
      <NavCol ref={ref}  className={
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