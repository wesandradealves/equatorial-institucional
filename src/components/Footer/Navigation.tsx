import React, { useCallback, useState } from 'react';
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow } from './style';
import { NavColTypo } from '@/types/enums';

export function Navigation({props = 'default value'}: NavColTypo) {
  const [isExpanded, setExpand] = useState<any>(false);

  return (<NavCol className="flex-fill">
    <NavItem className="d-flex flex-column">
      <NavLink className="d-flex align-items-center justify-content-between" >{props?.title} {props?.below && <Arrow onClick={() => {
        setExpand(!isExpanded);
      }} className={`fa-solid fa-angle-${isExpanded ? 'up' : 'down'} d-lg-none`}></Arrow>}</NavLink>
      {props?.below && <NavSubmenu className={`d-${isExpanded ? 'flex' : 'none'} d-lg-flex flex-column`}>
        {props?.below.map(function(row: any, i: number){
            return (
              <NavItem key={i}>
                <NavLink href={row?.absolute.replace(process.env.NEXT_PUBLIC_BASE_URL, "")}>{row?.title}</NavLink>
              </NavItem>
            );
        })}    
      </NavSubmenu>}        
    </NavItem>
  </NavCol>);
}
