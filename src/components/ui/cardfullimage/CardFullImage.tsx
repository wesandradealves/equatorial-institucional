import React, { useState, useEffect } from 'react';
import { Icon } from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
import Button from '../actions/Button';
import './CardFullImage.scss';

interface CardFullImageProps {
  images: string[];
  height: string;
  title?: string;
  description?: string;
  label?: string;
  buttonText?: string;
  onClick?: () => void;
}

const CardFullImage: React.FC<CardFullImageProps> = ({
  images,
  height,
  title,
  description,
  label,
  buttonText,
  onClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="card-full-image" style={{ height }}>
      <div className="content-layer">
        <div className="line"></div>
        {label && <div className="label">{label}</div>}
        <div className="bottom-left">
          {title && <h1 className="title">{title}</h1>}
          {description && <p className="description">{description}</p>}
          {buttonText && (
            <div className='button'> <Button label={buttonText} onClick={onClick} iconEnabled variant='secondary'/></div>
          )}
        </div>
        {images.length > 1 && (
          <div className="navigation-buttons">
            <button className="next-button" onClick={handleNextImage}>
              <Icon path={mdiArrowRight} size={1} />
            </button>
          </div>
        )}
      </div>
      <div className="gradient-layer"></div>
      <div className="image-layer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Background"
            onLoad={handleImageLoad}
            className={`image ${index === currentImageIndex ? 'active' : ''} ${loading ? 'loading' : ''}`}
          />
        ))}
      </div>
      {loading && <div className="loading-indicator">Loading...</div>}
    </div>
  );
};

export default CardFullImage;
