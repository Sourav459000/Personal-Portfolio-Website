import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f24] to-[#2c3e50] text-white">
      {/* Navbar */}
      <nav className="fixed top-4 left-4 right-4 mx-auto max-w-8xl bg-[#374151]/80 backdrop-blur-lg shadow-lg rounded-xl p-4 flex justify-between items-center z-50">
        {/* Responsive Navbar Text */}
        <h1 className="text-xl md:text-3xl font-bold text-[#facc15]">
          Sourav Toshniwal
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />} {/* Toggle Menu Icon */}
        </button>
      </nav>

      {/* Mobile Dropdown Menu with Matching Navbar Styling */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 mx-auto max-w-8xl bg-[#374151]/80 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 z-50 transition-all duration-300 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <NavItem to="/" label="Home" onClick={() => setMenuOpen(false)} />
        <NavItem to="/about" label="About" onClick={() => setMenuOpen(false)} />
        <NavItem to="/projects" label="Projects" onClick={() => setMenuOpen(false)} />
        <NavItem to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
      </div>

      {/* Page Routes */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

/* Navbar Item Component */
function NavItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative text-lg font-medium text-gray-300 px-4 py-2 transition duration-300 hover:text-[#facc15]"
    >
      {label}
      {/* Underline animation */}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#facc15] transition-all duration-300 hover:w-full"></span>
    </Link>
  );
}
