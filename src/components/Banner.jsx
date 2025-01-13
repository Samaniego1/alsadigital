import React, { useState, useEffect, useRef } from 'react';
import '../styles/Banner.scss';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner1mobile from '../assets/banner2mobile (1).png';
import banner2mobile from '../assets/banner2mobile (2).png';


const Banner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if the device is mobile
    const images = isMobile
        ? [banner1mobile, banner2mobile] // Use mobile-specific images
        : [banner1, banner2]; // Use desktop-specific images

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false); // For transition effect
    const bannerRef = useRef(null);
    const startX = useRef(null);

    useEffect(() => {
        // Update `isMobile` dynamically on window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000); // Change image every 7 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsTransitioning(false);
        }, 500); // Match the CSS transition duration
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 500);
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!startX.current) return;
        const diff = startX.current - e.touches[0].clientX;

        if (diff > 50) {
            handleNext();
            startX.current = null;
        } else if (diff < -50) {
            handlePrev();
            startX.current = null;
        }
    };

    const handleMouseDown = (e) => {
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!startX.current) return;
        const diff = startX.current - e.clientX;

        if (diff > 50) {
            handleNext();
            startX.current = null;
        } else if (diff < -50) {
            handlePrev();
            startX.current = null;
        }
    };

    const handleMouseUp = () => {
        startX.current = null;
    };

    return (
        <div
            className="banner"
            style={{ marginTop: 0, marginBottom: '20px' }}
            ref={bannerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Ensure drag ends when mouse leaves the banner
        >
            <div className={`banner-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="banner-image fade-effect"
                />
                <button className="banner-arrow banner-prev" onClick={handlePrev}>
                    &#9664; {/* Left arrow */}
                </button>
                <button className="banner-arrow banner-next" onClick={handleNext}>
                    &#9654; {/* Right arrow */}
                </button>
                <div className="banner-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
