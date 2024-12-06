'use client'
import React, { useRef } from 'react';
import Sp from './Sp';

function Special() {
  const slides = [
    <Sp text="Cardiologue" imageSrc="/webp/geek.webp" />,
    <Sp text="Dermatologue" imageSrc="/webp/women2.webp" />,
    <Sp text="Pédiatre" imageSrc="/webp/eyes.webp" />,
    <Sp text="Ophtalmologue" imageSrc="/webp/geek.webp" />,
    <Sp text="Dentiste" imageSrc="/webp/women2.webp" />,
    <Sp text="Neurologue" imageSrc="/webp/eyes.webp" />,
    <Sp text="Chirurgien" imageSrc="/webp/geek.webp" />,
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging = true;
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust the multiplier for scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  return (
    <div className="mt-[2%] mx-auto md:w-[94%] w-full flex justify-center items-center relative">
      <div
        ref={sliderRef}
        className="slider-container"
        style={{
          display: 'flex',
          overflowX: 'scroll',
          cursor: 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              minWidth: '25%',
              flexShrink: 0,
              padding: '10px', // Add padding between slides
            }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Special;
