import React, { useState } from 'react';
import './VideoGallery.scss';
import CardVideo from '../cardvideo/CardVideo';

interface VideoItem {
  title: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  iframeUrl?: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  selectedVideoIndex: number;
  onChangeIndex?: (index: number) => void;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, selectedVideoIndex, onChangeIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(selectedVideoIndex);

  const handleVideoClick = (index: number) => {
    setSelectedIndex(index);
    if (onChangeIndex) {
      onChangeIndex(index);
    }
  };

  const calculateHeight = (index: number) => {
    const distance = Math.abs(selectedVideoIndex - index);
    return Math.max(500 - distance * 50, 350); // Ajusta a altura com base na distância, mantendo um mínimo de 350px
  };

  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`video-item ${selectedVideoIndex === index ? 'selected' : ''}`}
          onClick={() => handleVideoClick(index)}
          style={{ height: `${calculateHeight(index)}px` }}
        >
          <CardVideo
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            thumbnailUrl={video.thumbnailUrl}
            iframeUrl={video.iframeUrl}
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
