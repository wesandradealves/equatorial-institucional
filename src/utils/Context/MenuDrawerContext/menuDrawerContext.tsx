'use client'
import { createContext, useState } from 'react';
import { noop } from '@babel/types';

interface MenuDrawerContextType {
  isMenuOpen: boolean,
  openDrawer: () => void,
  closeDrawer: () => void
}
export const MenuDrawerContext = createContext<MenuDrawerContextType>({
  isMenuOpen: false,
  openDrawer: noop,
  closeDrawer: noop
});
export  function MenuDrawerProvider({ children }:any){
  const [isMenuOpen, setOpenMenuDrawer] = useState(false)
  const openDrawer = () => setOpenMenuDrawer(true)
  const closeDrawer = () => setOpenMenuDrawer(false)
  return (
    <MenuDrawerContext.Provider value={{ isMenuOpen, openDrawer, closeDrawer }}>
      {children}
    </MenuDrawerContext.Provider>
  )
}
