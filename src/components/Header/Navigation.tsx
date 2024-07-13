import { NavigationTypo } from "@/types/enums";
import { useContext, useEffect } from "react";
import { NavCol, NavItem, NavLink, NavSubmenu, Arrow, Nav } from './style';

export default function Navigation(props: NavigationTypo) {
  return (
    <>
      {props?.data && <Nav className={`flex-fill ${props?.className}`}><NavCol className="d-flex flex-wrap justify-content-center align-items-center">
        {props?.data.map(function(row: any, i: number){
            return (
              <NavItem key={i}>
                <NavLink href={row?.absolute.replace(process.env.NEXT_PUBLIC_BASE_URL, "")} className="d-flex align-items-center">
                  {row?.title}
                  {row?.below && <Arrow className={`fa-solid fa-angle-down`}></Arrow>}
                </NavLink>
                <>
                  {
                    row?.below && <NavSubmenu className="d-none">
                      {row?.below.map(function(row: any, i: number){
                          return (
                            <NavItem key={i}>
                              <NavLink href={row?.absolute.replace(process.env.NEXT_PUBLIC_BASE_URL, "")}>
                                {row?.title}
                              </NavLink>
                            </NavItem>
                          );
                      })}
                    </NavSubmenu>
                  }      
                </>                    
              </NavItem>
            );
        })}   
      </NavCol>
    </Nav>}    
    </>
  );
}