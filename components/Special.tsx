'use client'
import React, { useState, useEffect } from 'react'
import Sp from "./Sp"

function Special() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  <Sp text="Cardiologue" imageSrc="/webp/geek.webp" />,
  <Sp text="Dermatologue" imageSrc="/webp/women2.webp" />,
  <Sp text="Pédiatre" imageSrc="/webp/eyes.webp" />,

  <Sp text="Ophtalmologue" imageSrc="/webp/geek.webp" />,
  <Sp text="Dentiste" imageSrc="/webp/women2.webp" />,
  <Sp text="Neurologue" imageSrc="/webp/eyes.webp" />,


  <Sp text="Chirurgien" imageSrc="/webp/geek.webp" />,
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className='mt-[2%] mx-auto w-[68%] flex justify-center items-center relative'>
        <div className="slider-container" style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
          <div
            className="slides-wrapper"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              width: `${(100 / 3) * slides.length}%`, // Show three slides at once
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide" style={{ minWidth: '33.33%' }}>
                {slide}
              </div>
            ))}
          </div>
        </div>
        {/* Left Arrow */}
        {/* <button onClick={goToPrevSlide} style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '50%',
        }}>
          &#60;
        </button>
     
        <button onClick={goToNextSlide} style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '50%',
        }}>
          &#62;
        </button>

         */}
      </div>
    </>
  )
}

export default Special;
