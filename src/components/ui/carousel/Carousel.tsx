"use client"

import React, { useState } from 'react';
import PageControl from '../navigation/page-control/page-control';
import VideoGallery from '../videogallery/VideoGallery';
import Button from '../actions/Button';
import './Carousel.scss'; // Assuming this stylesheet for global styles

export interface VideoItem {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  iframeUrl?: string;
}

interface CarouselProps {
    title: string,
    videos: VideoItem[];
}

const Carousel: React.FC<CarouselProps> = ({ title, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = videos.length;

  const handlePageControlIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleVideoGalleryIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">

        <div className="carousel-header">
            <h1>{title}</h1>
            <Button label='Ver todos os vídeos' 
                variant='secondary'
            iconEnabled />
        </div>
        <div className="carousel">
            <VideoGallery
                videos={videos}
                selectedVideoIndex={currentIndex}
                onChangeIndex={handleVideoGalleryIndexChange}
            />
            <PageControl
                totalPages={totalPages}
                currentIndex={currentIndex}
                onChangeIndex={handlePageControlIndexChange}
            />
        </div>
    </div>
    
  );
}

export default Carousel;
