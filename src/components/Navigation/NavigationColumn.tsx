import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function NavigationColumn(props: NavColTypo) {
  const [isExpanded, setExpand] = useState<any>(false);
  const [scrollPosition, setScroll] = useState<any>(false);
  const classNames = require('classnames');
  const ref = useRef(null);
  const pathname = usePathname();
  const disallowed_urls = [
    '',
    '#',
    '/'
  ];

  const handleScroll = () => {
    setScroll(window.scrollY);
  }; 
  
  useEffect(() => {
    if(scrollPosition > 0) setExpand(false)
  }, [scrollPosition]);  

  const useOutsideAlerter = useCallback((ref: any) => {
    function handleClickOutside(event: any) {
      if(!event.target.closest("header")) {
        if(ref && ref?.current && Array.from(ref?.current?.classList).includes("is-expanded")) setExpand(false)
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
          <NavLink className="nav-link d-flex align-items-center justify-content-between">
            <Link onClick={(e) => {
              if(disallowed_urls.includes(props?.data?.relative) || pathname.split("/").includes(props?.data?.alias)) e.preventDefault()
            } } className="nav-link" href={`${pathname}/${props?.data?.alias}`}>
              {props?.data?.title} 
            </Link>

            {props?.data?.below && <Arrow onClick={() => {
              setExpand(!isExpanded);
            }} className={`fa-solid fa-angle-${isExpanded ? 'up' : 'down'}`} />}
          </NavLink>

          {props?.data?.below && <NavSubmenu className={`d-${isExpanded ? 'flex' : 'none'} nav-submenu flex-column`}>
            {props?.data?.below.map(function(row: any, i: number){
                return (
                  <NavItem className='nav-item' key={i}>
                    <NavLink className="nav-link d-flex align-items-center justify-content-between">
                      <Link onClick={(e) => {
                        if(disallowed_urls.includes(row?.relative) || pathname.split("/").includes(row?.alias)) e.preventDefault()
                      } } className="nav-link" href={`${pathname}/${row?.alias}`}>
                        {row?.title} 
                      </Link>
                    </NavLink>
                  </NavItem>
                );
            })}    
          </NavSubmenu>}        
        </NavItem>
      </NavCol>  
    </>
  )
}