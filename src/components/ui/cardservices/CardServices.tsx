'use client'

// CardServices.tsx
import React from 'react';
import Button from '../actions/Button';
import './CardServices.scss';

interface CardServicesProps {
  cover: string;
  title: string;
  description: string;
  overline: string;
  buttonText: string;
  logo: string;
  onClick?: () => void;
  closed?: boolean;
  height?: string;
}

const CardServices: React.FC<CardServicesProps> = ({
  cover,
  title,
  description,
  overline,
  buttonText,
  logo,
  onClick,
  closed = false,
  height = 'auto'
}) => {
  return (
    <div className="card-container" style={{ height: closed ? height : 'auto' }}>
      <div className={`card-left ${closed ? 'w-full' : 'w-1/3'}`} onClick={closed ? onClick : undefined}>
        <img src={cover || logo} alt="Cover" />
      </div>
      {!closed && (
        <div className="card-right">
          <div className="card-overline">{overline}</div>
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
          <div className="card-button">
            <Button label={buttonText} onClick={onClick} variant='secondary' />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardServices;
