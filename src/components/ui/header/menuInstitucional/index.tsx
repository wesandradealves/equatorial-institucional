'use client'
import MenuInstitucionalMobile from './mobile';
import useWindowWidth from '../../../../../utils/Hook/useWindowWidth';
import MenuInstitucionalDeskTop from './desktop';
export function MenuInstitucional(){
  const windowWidth = useWindowWidth();
  return (
    <>
    <MenuInstitucionalMobile/>
    </>
  )
}

export default MenuInstitucional
