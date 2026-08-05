import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Electrical from "./pages/electrical";
import Mechanical from "./pages/mechanical";
import Trading from "./pages/trading";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;