import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

import B01 from '../assets/wellu.png';
import B02 from '../assets/bodega.png';
import B03 from '../assets/vinalaspitras.png';
import B04 from '../assets/wellu.png';
import B05 from '../assets/bodega.png';
import B06 from '../assets/vinalaspitras.png';

import '../styles/Slide.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Slide = () => {
    const swiperRef = useRef(null);
    const images = [B01, B02, B03, B04, B05, B06];

    const handleSlideClick = (index) => {
        if (swiperRef.current) {
            const totalSlides = images.length;
            const slidesPerView = 3; // Adjust this if you change slidesPerView
            const centerIndex = Math.floor(slidesPerView / 2);
            const newIndex = (index - centerIndex + totalSlides) % totalSlides;
            swiperRef.current.slideTo(newIndex);
        }
    };

    console.log('Slide component rendered');
    return (
        <div className='slider-container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -75,
                    depth: 250,
                    modifier: 3.5,
                    slideShadows: false
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`slide-${index}`} onClick={() => handleSlideClick(index)} />
                    </SwiperSlide>
                ))}
                
                <div className='slider-controler'> 
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20}/>
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20}/>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slide;