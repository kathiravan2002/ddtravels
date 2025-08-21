import React, { useEffect, useRef, useState } from 'react'
import Home from '../shared/components/Home'

function Homepage() {
  const [activeSlide, setActiveSlide] = useState(0);
      const swiperRef = useRef(null);
      const handleSlideChange = (swiper) => {
          setActiveSlide(swiper.realIndex);
      };
  
      const goToPrevSlide = () => {
          if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slidePrev();
          }
      };
  
      const goToNextSlide = () => {
          if (swiperRef.current && swiperRef.current.swiper) {
              swiperRef.current.swiper.slideNext();
          }
      };
      const multiplier = {
          translate: 0.1,
          rotate: 0.01,
      };
  
      useEffect(() => {
          function calculateWheel() {
              const slides = document.querySelectorAll(".single");
              slides.forEach((slide) => {
                  const rect = slide.getBoundingClientRect();
                  const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
                  let ty =
                      Math.abs(r) * multiplier.translate -
                      rect.width * multiplier.translate;
  
                  if (ty < 0) ty = 0;
  
                  const transformOrigin = r < 0 ? "left top" : "right top";
                  slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate
                      }deg)`;
                  slide.style.transformOrigin = transformOrigin;
              });
          }
  
          function raf() {
              requestAnimationFrame(raf);
              calculateWheel();
          }
  
          raf();
      }, []);
  
        const images = [
          "/assets/images/Home/architect 1.png",
          "/assets/images/Home/architect 2.png",
          "/assets/images/Home/architect 3.png",
          "/assets/images/Home/architect 1.png",
          "/assets/images/Home/architect 2.png",
          "/assets/images/Home/architect 3.png",
  
  
      ];
  return (
    <div><Home activeSlide={activeSlide} handleSlideChange={handleSlideChange} goToPrevSlide={goToPrevSlide} goToNextSlide={goToNextSlide} images={images} swiperRef={swiperRef} setActiveSlide={setActiveSlide}/></div>
  )
}

export default Homepage