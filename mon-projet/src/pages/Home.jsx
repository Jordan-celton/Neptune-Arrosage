import React from "react";
import About from "../components/About";
import HomeServices from "../components/HomeServices";
import HomeContact from "../components/HomeContact";
import "../styles/Home.css";
import imageSrc from "../assets/photos/architecture-1853096_1920.webp";

function Home() {
  return (
    <main className="home-container">
      <img src={imageSrc} alt="Description de l'image" className="home-image" />

      {/* Composants */}
      <About />
      <HomeServices />
      <HomeContact />
    </main>
  );
}

export default Home;
