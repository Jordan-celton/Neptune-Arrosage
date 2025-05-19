import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/HomePage/Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ children, autoScroll = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef();
  const intervalRef = useRef();
  const isTransitioning = useRef(false);

  // 1. Fonctions de navigation
  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning.current) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      handleNext();
    }, interval);
  }, [interval, stopAutoScroll, handleNext]);

  // 2. Responsive design
  useEffect(() => {
    // Responsive logic for visible items can be added here if needed in the future.
  }, []);

  // 3. Clonage des éléments pour le défilement infini
  useEffect(() => {
    const track = trackRef.current;
    const items = Array.from(track.children);
    const totalItems = items.length;

    if (!track.hasAttribute("data-cloned")) {
      for (let i = 0; i < totalItems; i++) {
        const cloneStart = items[i].cloneNode(true);
        const cloneEnd = items[i].cloneNode(true);
        cloneStart.setAttribute("data-clone", "start");
        cloneEnd.setAttribute("data-clone", "end");
        track.appendChild(cloneEnd);
        track.insertBefore(cloneStart, items[0]);
      }
      track.setAttribute("data-cloned", "true");
      setCurrentIndex(totalItems); // Commencer au premier élément original
    }
  }, [children]);

  // 4. Gestion du défilement automatique
  useEffect(() => {
    if (autoScroll) {
      startAutoScroll();
    }
    return stopAutoScroll;
  }, [autoScroll, startAutoScroll, stopAutoScroll]);

  // 5. Animation du carrousel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = track.children;
    const originalItemsCount = items.length / 3; // Nombre d'éléments originaux
    const itemWidth = items[0].offsetWidth + 20; // Inclure le margin si nécessaire

    // Positionner le track
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    const handleTransitionEnd = () => {
      isTransitioning.current = false;

      // Si on arrive à la fin des clones (droite)
      if (currentIndex >= originalItemsCount * 2) {
        isTransitioning.current = true;
        track.style.transition = "none";
        setCurrentIndex(originalItemsCount); // Retour discret au début
        // Forcer le recalcul du style
        requestAnimationFrame(() => {
          track.style.transform = `translateX(-${
            originalItemsCount * itemWidth
          }px)`;
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.5s ease-in-out";
            isTransitioning.current = false;
          });
        });
      }
      // Si on arrive au début des clones (gauche)
      else if (currentIndex < 0) {
        isTransitioning.current = true;
        track.style.transition = "none";
        setCurrentIndex(originalItemsCount * 2 - 1); // Retour discret à la fin
        requestAnimationFrame(() => {
          track.style.transform = `translateX(-${
            (originalItemsCount * 2 - 1) * itemWidth
          }px)`;
          requestAnimationFrame(() => {
            track.style.transition = "transform 0.5s ease-in-out";
            isTransitioning.current = false;
          });
        });
      }
    };

    track.style.transition = "transform 0.5s ease-in-out";
    isTransitioning.current = true;
    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <button className="carousel-button prev" onClick={handlePrev}>
        <ChevronLeft size={24} />
      </button>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {children}
        </div>
      </div>

      <button className="carousel-button next" onClick={handleNext}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
