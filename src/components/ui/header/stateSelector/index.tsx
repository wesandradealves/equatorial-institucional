'use client'
import './style.scss'
import { MdExpandMore } from "react-icons/md"
import { useState } from 'react';

const dropdownActive = {
  opacity: 1,
  visibility:'visible'
}

const states = ['Alagoas', 'Amapá', 'Goiás', 'Maranhão', 'Pará', 'Piaui', 'Rio Grande do Sul'];

export default function StateSelector() {
  const [ dropdownActiveState, setDropdownActive ] = useState(false);
  return (
    <div className='dropdown' onMouseEnter={()=>setDropdownActive(true)} onMouseLeave={()=>setDropdownActive(false)}>
      <button className='dropdownbtn'>Dropdown <MdExpandMore size={24}/></button>
      <div className='dropdownContent'  style={dropdownActiveState ? dropdownActive: undefined}>
        {states.map((state,index) => (
          <a className='tagStates' key={index} href="#">{state}</a>
        ))}
      </div>
    </div>
  )
}
