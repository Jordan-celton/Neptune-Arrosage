import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Neptune from "./pages/Neptune";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Recrutement from "./pages/Recrutement";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";
import MentionsLegales from "./pages/MentionLegales";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

const WrappedApp = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default WrappedApp;
