'use client'
import styles from './style.module.scss'
import { MdOutlineSearch, MdMenu } from "react-icons/md";
import Image from "next/image"
import logo from '../../../../../assets/img/Logo.svg';
import { useContext } from 'react';
import {MenuDrawerContext} from "../../../../../../.tmp/utils/Context/MenuDrawerContext/menuDrawerContext";

export function MenuInstitucionalMobile() {
  const { openDrawer } = useContext(MenuDrawerContext)
  return (
    <div className={styles.container}>
      <div className={styles.contentMenu}>
        <button className={styles.cardIcon}>
          <MdOutlineSearch size={24} color="#0414a1" />
        </button>
        <Image
          src={logo}
          alt="logo"
          width={151}
          height={33}
        />
        <button className={styles.cardIcon} onClick={openDrawer}>
          <MdMenu size={24} color='#0414a1' />
        </button>
      </div>
    </div>

  )
}

export default MenuInstitucionalMobile;
