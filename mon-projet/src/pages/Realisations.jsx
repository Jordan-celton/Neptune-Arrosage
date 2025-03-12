import React, { useState } from "react";
import "../styles/Realisations.css";
import HomeContact from "../components/HomeContact";
import image1 from "../assets/photos/20180614_160716.webp";
import image2 from "../assets/photos/20200512_155618.webp";
import image3 from "../assets/photos/architecture-1853096_1920.webp";
import image4 from "../assets/photos/Fontaine 2.webp";
import image5 from "../assets/photos/Fontaine Rueil Imp 1.webp";
import image6 from "../assets/photos/HRO1.webp";
import image7 from "../assets/photos/istockphoto-612254260-2048x2048.webp";
const realisationsData = [
  {
    title: "Jardin de Luxe à Nantes",
    description: "Un aménagement paysager complet avec un système d'arrosage.",
    images: [image1, image2, image3],
  },
  {
    title: "Espace Vert",
    description:
      "Aménagement de grands espaces verts avec des zones d'ombrage.",
    images: [image4, image5, image6, image7],
  },
  {
    title: "Jardin de Luxe à Nantes",
    description: "Un aménagement paysager complet avec un système d'arrosage.",
    images: [image1, image2, image3],
  },
  {
    title: "Espace Vert",
    description:
      "Aménagement de grands espaces verts avec des zones d'ombrage.",
    images: [image4, image5, image6, image7],
  },
  {
    title: "Jardin de Luxe à Nantes",
    description: "Un aménagement paysager complet avec un système d'arrosage.",
    images: [image1, image2, image3],
  },
  {
    title: "Espace Vert",
    description:
      "Aménagement de grands espaces verts avec des zones d'ombrage.",
    images: [image4, image5, image6, image7],
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
