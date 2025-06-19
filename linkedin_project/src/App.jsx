import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About us";
import Services from "./assets/pages/Services";
import Destination from "./assets/pages/Destination";
import Preparation from "./assets/pages/Preparation";
import Contact from "./assets/pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
