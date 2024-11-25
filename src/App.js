import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar"; // Ensure Navbar is responsive
import Footer from "../src/components/Footer"; // Ensure Footer matches your app's theme
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Features from "../src/Pages/Features";
import Contact from "../src/Pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
