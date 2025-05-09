import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/HomePage/Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ children, autoScroll = true, interval = 3000 }) => {
  const [visibleItems, setVisibleItems] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef();
  const intervalRef = useRef();

  // 📌 1. Fonction de défilement automatique
  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll(); // Pour éviter les doublons
    intervalRef.current = setInterval(() => {
      handleNext();
    }, interval);
  }, [interval, stopAutoScroll, handleNext]);

  // 📌 2. Mise à jour du nombre d'éléments visibles
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width <= 576) setVisibleItems(1);
      else if (width <= 992) setVisibleItems(2);
      else setVisibleItems(3);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // 📌 3. Clonage des éléments pour permettre le défilement infini
  useEffect(() => {
    const track = trackRef.current;
    const items = Array.from(track.children);
    const totalItems = items.length;

    // Cloner les éléments seulement si ce n'est pas déjà fait
    if (!track.hasAttribute("data-cloned")) {
      for (let i = 0; i < totalItems; i++) {
        const cloneStart = items[i].cloneNode(true);
        const cloneEnd = items[i].cloneNode(true);
        cloneStart.setAttribute("data-clone", "true");
        cloneEnd.setAttribute("data-clone", "true");
        track.appendChild(cloneEnd);
        track.insertBefore(cloneStart, items[0]);
      }
      track.setAttribute("data-cloned", "true");
      setCurrentIndex(totalItems); // Positionner au premier "vrai" élément
    }
  }, [children]);

  // 📌 4. Défilement automatique (début dès le montage)
  useEffect(() => {
    if (autoScroll) {
      startAutoScroll();
    }
    return stopAutoScroll; // Assurez-vous de nettoyer l'intervalle
  }, [autoScroll, startAutoScroll, stopAutoScroll]);

  // 📌 5. Mise à jour de la position du carrousel
  useEffect(() => {
    const track = trackRef.current;
    const items = track.children;
    const totalItems = items.length / 3; // Prendre en compte les clones
    const itemWidth = items[0].offsetWidth + 20;

    // Appliquer la transition du carrousel
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    const handleTransitionEnd = () => {
      // Si on atteint la fin des clones, on remet l'index à la première vraie image sans transition visible
      if (currentIndex >= totalItems * 2) {
        track.style.transition = "none";
        setCurrentIndex(totalItems); // Retour à la position initiale des éléments (sans voir le saut)
      } else if (currentIndex < 0) {
        track.style.transition = "none";
        setCurrentIndex(totalItems * 2 - visibleItems); // Réinitialisation au clone final
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, visibleItems]);

  // 📌 6. Rendu du composant
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
