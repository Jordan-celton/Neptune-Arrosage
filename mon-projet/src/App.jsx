import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Recrutement from "./pages/Recrutement";
import { HelmetProvider } from "react-helmet-async";
import Background from "./components/Background";
import FontainesBassins from "./pages/FontainesBassins";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fontaines-bassins" element={<FontainesBassins />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recrutement" element={<Recrutement />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
