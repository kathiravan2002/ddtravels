import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Swiperfunction(props) {
   const {images,goToNextSlide,goToPrevSlide,handleSlideChange,activeSlide,swiperRef,setActiveSlide} = props;

    return (
        <div>
            <Swiper
                ref={swiperRef}
                className="overflow-hidden mb-10 "
                spaceBetween={-10}
                speed={1000}
                slidesPerView={2}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                centeredSlides={true}
                navigation={false} // Disable default navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    setActiveSlide(swiper.realIndex);
                }}
            >
                {images
                    .map((data, index) => (
                        <SwiperSlide key={index} className="">
                            {({ isActive }) => (
                                <div className={`relative overflow-hidden h-[200px] md:h-[300px] rounded-[30px] drop-shadow-[#c1956e] duration-300 ${isActive ? 'drop-shadow-xl drop-shadow-[#ddc49b]' : ''}`}>
                                    <img
                                        src={data}
                                        alt={data}
                                        className={`transition-transform w-full h-full object-cover duration-500 mx-auto ${isActive ? ' z-10 shadow-2xl scale-110' : 'scale-80 opacity-70'}`}
                                        style={{ borderRadius: '1rem' }}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="flex justify-center gap-4 mb-6 ">
                <button
                    onClick={goToPrevSlide}
                    className="w-12 h-12 bg-[#6CBF02] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5aa002] transition-colors duration-300 shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={goToNextSlide}
                    className="w-12 h-12 bg-[#6CBF02] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5aa002] transition-colors duration-300 shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            
        </div>
    )
}

export default Swiperfunction