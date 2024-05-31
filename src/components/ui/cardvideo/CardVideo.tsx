'use client'
import React, { useState } from 'react';
import './CardVideo.scss';
import './PlayIcon';
import PlayIcon from './PlayIcon';

export interface CardVideoProps {
    title: string;
    description: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    iframeUrl?: string;
    width: string; 
    height: string;
}

const CardVideo: React.FC<CardVideoProps> = ({
    title,
    description,
    videoUrl,
    thumbnailUrl,
    iframeUrl,
    width,
    height 
}) => {
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    const handlePlay = () => {
        setPlayerVisible(true);
    }

    let src = iframeUrl || '';

    if (src) {
        const delimiter = src.includes('?') ? '&' : '?';
        src = `${src}${delimiter}autoplay=1`;
    }

    return (
        <div className="card-video" style={{ width, height, position: 'relative', backgroundColor: 'black' }}>
            {!isPlayerVisible && (
                <div className="video-thumbnail" style={{ backgroundImage: `url(${thumbnailUrl})`, width: '100%', height: '100%' }}>
                     
                    <div className="overlay">
                        
                        <div className="info-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="info-description">
                            <p>{description}</p>
                        </div>
                    </div>
                    <button className="play-button" onClick={handlePlay}>
                            <PlayIcon />
                        </button>
                </div>
            )}
            {isPlayerVisible && (iframeUrl ? (
                <iframe 
                    src={src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }}
                ></iframe>
            ) : (
                <video 
                    src={videoUrl} 
                    controls 
                    autoPlay
                    style={{ width: '100%', height: '100%' }}
                >
                    Seu navegador não suporta o elemento <code>video</code>.
                </video>
            ))}
        </div>
    );
};

export default CardVideo;
