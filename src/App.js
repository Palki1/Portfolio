import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Training from "./components/Training";
import Achievements from "./components/Achievements";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <Router>
      <ScrollToTop />
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home ratio={ratio} />
              <About />
              <Skills />
              <Education />
              <Achievements />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/training/internship" element={<Training />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
