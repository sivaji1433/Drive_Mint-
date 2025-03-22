import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import Landingpag from "../Landing_pag/Landingpag";
import Image from "../Nav/Image";
import Pag from "../Landing_pag/Pag";
import CarList from "../Landing_pag/Vest/CarList";
import List from "../Landing_pag/List";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <a href="http://localhost:5173/navbar">
            <img className="drive" src="./cars.jpg" alt="Drive Mint" />
          </a>
        </div>

        <h1 className="site-title">
          <a href="http://localhost:5173/navbar">Drive Mint</a>
        </h1>

        <div className="nav-links-container">
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/car" onClick={() => setMenuOpen(false)}>Cars</Link>
            <Link to="/booking" onClick={() => setMenuOpen(false)}>Bookings</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="menu-toggle" onClick={handleToggleMenu}>
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/bookings" onClick={() => setMenuOpen(false)}>Bookings</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Other Components */}
      <Pag />
      <CarList />
      <List />
    </>
  );
};

export default Navbar;
