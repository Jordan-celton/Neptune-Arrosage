import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        {/* <Route path="/contact" element= {<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
