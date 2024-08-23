import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ConfigProvider from "@/context/config";

export default function NavigationColumn(props: NavColTypo) {
  const { config } = useContext<any>(ConfigProvider);
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
          <NavLink 
            className={
              classNames(
                "nav-link d-flex align-items-center justify-content-between",
                {
                  'is-expanded': !!isExpanded
                }
              )      
            }>
            <Link onClick={(e) => {
              // e.preventDefault();
              // if(disallowed_urls.includes(props?.data?.relative) || pathname.split("/").includes(props?.data?.alias)) e.preventDefault()
            } } className="nav-link" href={`${process.env.NEXT_PUBLIC_HOME_URL}/${props?.data?.alias}`}>
              {props?.data?.title} 
            </Link>

            {props?.data?.below && <Arrow onClick={() => {
              setExpand(!isExpanded);
            }} className={`fa-solid fa-angle-${isExpanded ? 'up' : 'down'}`} />}

            {props?.data?.field_icone && <>
              <img src={`${config?.basePath}${props?.data?.field_icone}`} loading='lazy' />
            </>}
          </NavLink>

          {props?.data?.below && <NavSubmenu className={`d-${isExpanded ? 'flex' : 'none'} nav-submenu lvl-1 flex-column`}>
            {props?.data?.below.map(function(row: any, i: number){
                return (
                  <NavItem className='nav-item' key={i}>
                    <NavLink className="nav-link d-flex align-items-center justify-content-between">
                      <Link onClick={(e) => {
                        // e.preventDefault();
                        // if(disallowed_urls.includes(row?.relative) || pathname.split("/").includes(row?.alias)) e.preventDefault()
                      } } className="nav-link" href={`${process.env.NEXT_PUBLIC_HOME_URL}/${row?.alias}`}>
                        {row?.title} 
                      </Link>
                      {row?.below && <NavSubmenu className='nav-submenu flex-column lvl-2'>{
                        row?.below.map(function(row: any, i: number){
                          return (
                            <NavItem className='nav-item' key={i}>
                              <NavLink className="nav-link d-flex align-items-center justify-content-between">
                                <Link onClick={(e) => {
                                  // e.preventDefault();
                                  // if(disallowed_urls.includes(row?.relative) || pathname.split("/").includes(row?.alias)) e.preventDefault()
                                } } className="nav-link" href={`${process.env.NEXT_PUBLIC_HOME_URL}/${row?.alias}`}>
                                  {row?.title} 
                                </Link>
                              </NavLink>
                            </NavItem>
                          );
                        })                        
                      }</NavSubmenu>}   
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