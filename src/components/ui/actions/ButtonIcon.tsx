'use client'
import "./ButtonIcon.scss"
import {useEffect, useState} from "react";
import { MdArrowForward } from 'react-icons/md';
export interface ButtonIcon {
  disabled?:boolean,
  onClick?:() => void,
  variant?: 'primary'|'secondary'|'outline'|'inversed',
  size?: 'large'|'small',
}

function ButtonIcon(props:ButtonIcon) {
  const [buttonClass,setButtonClass] = useState<string>()
  const [iconClass,setIconClass] = useState({})
  const handleClick = () => {
    console.log('Called')
  }

  const buildButton = () => {
    getButtonClass()
    getIconStyle()
  }
  const getButtonClass = () => {
    const { variant, size, disabled } = props
    setButtonClass(`
      buttonIconDefault
      buttonIconDefault--${variant || 'primary'}
      buttonIconDefault--${size || 'large'}
      ${disabled ? `buttonIconDefault--disabled` : ''}
      `)
  }
  const getIconStyle = () => {
    const { size, variant, disabled } = props
    const sizeIcon = size === 'large' ? 14 : 25
    let colorIcon = 'white';

    if(variant === 'primary' || variant === 'inversed'){
      colorIcon = 'white'
    }
    if(variant === 'secondary'){
      colorIcon = 'black'
    }
    if(variant === 'outline'){
      colorIcon = '#0414A1'
      if(disabled) {
        colorIcon = '#A9A9A9'
      }
    }

    setIconClass({
      color:colorIcon,
      size:sizeIcon
    })
  }

  useEffect(() => {
    buildButton()
  },[props.variant,props.size,props.disabled])
  return (
    <button
      className={buttonClass}
      onClick={handleClick}>
      <MdArrowForward {...iconClass}/>
    </button>
  )
}

export default ButtonIcon;
