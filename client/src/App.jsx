
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServicePage from "./pages/ServicePage"; // Import the dynamic service page
import Portfolio from "./pages/PortfolioPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Dynamic service route - catches all /services/:slug */}
        <Route path="/services/:slug" element={<ServicePage />} />
        
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;