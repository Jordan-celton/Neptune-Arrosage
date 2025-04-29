import React, { useState, useEffect, useRef } from "react";
import "../../styles/HomePage/Carousel.css";

const Carousel = ({
  children,
  visibleSlides = 3,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  const maxIndex = totalSlides - 1;
  const carouselRef = useRef(null);
  const cloneRef = useRef(null); // Ref for cloned elements

  let startX = 0;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1)); // Loop to the first slide after the last one
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1)); // Loop to the last slide if we are on the first one
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => nextSlide(), interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, nextSlide]);

  // Effect for smooth transition when reaching the last slide
  useEffect(() => {
    if (currentIndex === maxIndex) {
      // Disable transition to make the jump smooth to the first slide
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(0%)`;
      setTimeout(() => {
        setCurrentIndex(0); // Set index to 0 after transition
        carouselRef.current.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
      }, 500); // Wait for transition duration
    }
  }, [currentIndex, maxIndex]);

  return (
    <div className="carousel-container">
      <button
        className="carousel-btn left"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ◀
      </button>

      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-inner"
          ref={carouselRef}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: `${((totalSlides + 2) * 10) / visibleSlides}%`, // We add +1 to include the cloned first item
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="carousel-slide" key={index}>
              {child}
            </div>
          ))}
          {/* Clone the first slide at the end for seamless transition */}
          {React.Children.count(children) > 1 && (
            <div className="carousel-slide" ref={cloneRef}>
              {React.Children.toArray(children)[0]}{" "}
              {/* Cloning the first slide */}
            </div>
          )}
        </div>
      </div>

      <button
        className="carousel-btn right"
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
      >
        ▶
      </button>

      <div className="carousel-dots">
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
