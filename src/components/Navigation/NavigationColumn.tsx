import React, { useCallback, useEffect, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';

export default function NavigationColumn(props: NavColTypo) {
  const [isExpanded, setExpand] = useState<any>(false);

  return (
    <>
      <NavCol className={`nav-col ${props?.className}`}>
        <NavItem className="nav-item d-flex flex-column">
          <NavLink className="nav-link d-flex align-items-center justify-content-between" >{props?.data?.title} {props?.data?.below && <Arrow onClick={() => {
            setExpand(!isExpanded);
          }} className={`fa-solid fa-angle-${isExpanded ? 'up' : 'down'} d-lg-none`}></Arrow>}</NavLink>
          {props?.data?.below && <NavSubmenu className={`d-${isExpanded ? 'flex' : 'none'} nav-submenu d-lg-flex flex-column`}>
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