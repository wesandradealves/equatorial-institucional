'use client'
import './Button.scss'
import { useEffect, useState } from "react";
import Icon from '@mdi/react'; 
import * as mdiIcons from '@mdi/js';

export interface ButtonProps {
  iconEnabled?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'textlink';
  size?: 'large' | 'small';
  label: string;
}

function Button(props: ButtonProps) {
  const [buttonClass, setButtonClass] = useState<string>("");

  const buildButton = () => {
    getButtonClass();
  };

  const getButtonClass = () => {
    const { variant, size, disabled } = props;
    setButtonClass(`
      buttonDefault
      buttonDefault--${variant || 'primary'}
      buttonDefault--${size || 'large'}
      ${disabled ? `buttonDefault--disabled` : ''}
    `);
  };

  useEffect(() => {
    buildButton();
  }, [props.variant, props.size, props.disabled]);

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
     <span>{props.label}</span>
      {props.iconEnabled && (
        <span className="icon-container">
          <Icon path={mdiIcons.mdiArrowRight} size={1} className="icon" />
        </span>
      )}
    </button>
  );
}

export default Button;