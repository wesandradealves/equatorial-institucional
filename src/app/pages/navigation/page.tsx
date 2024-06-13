'use client';
import PageControl from '@/components/ui/navigation/page-control/page-control';
import './page.scss';
import { useEffect, useState } from 'react';
import PageProgressTimer from '@/components/ui/navigation/page-progress-timer/page-progress-timer';

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 8;
  const timerInterval = 5000;

  // Função para navegar para o próximo item no carrossel
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para navegar para o item anterior no carrossel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleProgressComplete = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  // Função para avançar para o próximo índice
  const handleNextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const totalSlides = 5; // Número total de slides

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, timerInterval);

    return () => clearInterval(intervalId);
  }, [totalSlides, timerInterval]);

  return (
    <>
      <h1>Componente Page Control</h1>
      <div className="component">
        <PageControl currentIndex={currentIndex} total={totalItems} />
        <div className="component">
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Próximo</button>
        </div>
      </div>
      <h1>Componente Page Timer</h1>
      {/* <div className="component">
        <PageTimer total={5} currentIndex={0} timer={timerInterval} />
      </div> */}
      {/* <div className="component">
        <div>
          <h1>Progresso dos Itens</h1>
          <div style={{ marginBottom: '20px' }}>
            <InstagramProgressBar
              duration={3000}
              isActive={activeIndex === 0}
              onProgressComplete={handleProgressComplete}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <InstagramProgressBar
              duration={5000}
              isActive={activeIndex === 1}
              onProgressComplete={handleProgressComplete}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <InstagramProgressBar
              duration={2000}
              isActive={activeIndex === 2}
              onProgressComplete={handleProgressComplete}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <InstagramProgressBar
              duration={4000}
              isActive={activeIndex === 3}
              onProgressComplete={handleProgressComplete}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <InstagramProgressBar
              duration={6000}
              isActive={activeIndex === 4}
              onProgressComplete={handleProgressComplete}
            />
          </div>
        </div>
      </div> */}
      {/* <div className="component">
        <CarouselIndicator
          total={totalItems}
          currentIndex={currentIndex}
          timer={timerInterval}
        />
      </div> */}
      <div className="component">
        <PageProgressTimer
          total={totalItems}
          currentIndex={currentSlide}
          timer={timerInterval}
        />
      </div>
    </>
  );
}
