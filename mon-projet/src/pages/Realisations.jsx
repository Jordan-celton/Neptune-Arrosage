import React, { useState } from "react";
import "../styles/Realisations.css";
import HomeContact from "../components/HomeContact";

const realisationsData = [
  {
    title: "Jardin de Luxe à Nantes",
    description: "Un aménagement paysager complet avec un système d'arrosage.",
    images: [
      "../assets/photos/20180614_160716.webp",
      "/images/jardin-luxe-2.jpg",
      "/images/jardin-luxe-3.jpg",
    ],
  },
  {
    title: "Espace Vert au Parc de la Ville",
    description:
      "Aménagement de grands espaces verts avec des zones d'ombrage.",
    images: [
      "/images/espace-vert-1.jpg",
      "/images/espace-vert-2.jpg",
      "/images/espace-vert-3.jpg",
    ],
  },
  // Ajoute d'autres réalisations ici si nécessaire...
];

const Realisations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="realisations-container main-container">
      <h1 className="realisations-title">Nos Réalisations</h1>
      <div className="realisations-grid">
        {realisationsData.map((realis, index) => (
          <div key={index} className="realisations-card">
            <h3>{realis.title}</h3>
            <p>{realis.description}</p>
            <div className="image-grid">
              {realis.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={realis.title}
                  className="realisations-image"
                  onClick={() => openImage(image)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Expanded view"
            className="modal-image"
          />
        </div>
      )}

      <HomeContact />
    </section>
  );
};

export default Realisations;
