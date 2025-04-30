import React, { useState, useEffect, useRef } from "react";
import "../../styles/HomePage/Carousel.css";

const Carousel = ({
  children,
  visibleSlides = 3,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = React.Children.count(children);
  const maxIndex = totalSlides - 1;
  const carouselRef = useRef(null);
  const cloneRef = useRef(null);

  let startX = 0;

  // Vérifie la taille de l'écran
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) {
      startX = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (!isMobile) {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
    }
  };

  useEffect(() => {
    if (!autoPlay || isMobile) return;
    const timer = setInterval(() => nextSlide(), interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, nextSlide, isMobile]);

  useEffect(() => {
    if (currentIndex === maxIndex && !isMobile) {
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(0%)`;
      setTimeout(() => {
        setCurrentIndex(0);
        carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      }, 500);
    }
  }, [currentIndex, maxIndex, isMobile]);

  // Version mobile - affichage en colonne
  if (isMobile) {
    return (
      <div className="cards-column-view">
        {React.Children.map(children, (child, index) => (
          <div className="card-item" key={index}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  // Version desktop/tablette - carousel
  return (
    <div className="carousel-container-cards">
      <button
        className="carousel-btn-cards left"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ◀
      </button>

      <div
        className="carousel-wrapper-cards"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-inner-cards"
          ref={carouselRef}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: `${((totalSlides + 2) * 10) / visibleSlides}%`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="carousel-slide-cards" key={index}>
              {child}
            </div>
          ))}
          {React.Children.count(children) > 1 && (
            <div className="carousel-slide-cards" ref={cloneRef}>
              {React.Children.toArray(children)[0]}
            </div>
          )}
        </div>
      </div>

      <button
        className="carousel-btn-cards right"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        ▶
      </button>

      <div className="carousel-dots-cards">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
