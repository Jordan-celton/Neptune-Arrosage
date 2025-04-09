import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Neptune from "./pages/Neptune";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
