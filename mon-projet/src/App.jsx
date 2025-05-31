import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Neptune from "./pages/Neptune";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Recrutement from "./pages/Recrutement";
import MentionsLegales from "./pages/MentionLegales";
import NotFound from "./pages/NotFound";

const GTM_ID = "GTM-5VNCT43T"; // Remplace par ton ID GTM réel

function loadGTM(id) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Initialisation AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    // Refresh AOS à chaque changement de page
    AOS.refresh();
  }, [location.pathname]);

  useEffect(() => {
    // Injecter Google Tag Manager une fois
    loadGTM(GTM_ID);
  }, []);

  return (
    <>
      {/* NoScript GTM (recommandé pour suivi si JS désactivé) */}
      <noscript>
        <iframe
          title="GTM"
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/recrutement/:jobId" element={<Recrutement />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
