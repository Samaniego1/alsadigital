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
    const images = [
        { src: B01, link: 'https://placeholder-link1.com' },
        { src: B02, link: 'https://placeholder-link2.com' },
        { src: B03, link: 'https://placeholder-link3.com' },
        { src: B04, link: 'https://placeholder-link4.com' },
        { src: B05, link: 'https://placeholder-link5.com' },
        { src: B06, link: 'https://placeholder-link6.com' },
    ];

    const handleImageClick = (index) => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.realIndex;
            if (currentIndex === index) {
                // If the clicked image is already centered, open the link
                window.open(images[index].link, '_blank');
            } else {
                // Center the clicked image
                swiperRef.current.slideToLoop(index);
            }
        }
    };

    return (
        <div className='slider-container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                allowTouchMove={true} // Habilitar desplazamiento táctil
                preventClicksPropagation={false} // Permitir clics
                touchRatio={1.5} // Ajustar sensibilidad táctil
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
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image.src}
                            alt={`slide-${index}`}
                            onClick={() => handleImageClick(index)}
                        />
                    </SwiperSlide>
                ))}

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <ArrowLeft size={20} />
                    </div>
                    <div className='swiper-button-next'>
                        <ArrowRight size={20} />
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slide;

