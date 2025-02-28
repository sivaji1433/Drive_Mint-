import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <nav className="navbar" 
    // style={{
    //   backgroundImage: "url('drive_mint.webp')",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   minHeight: "60px",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
    // }
  // }
  >
      <div className="navbar-container">
        <img className="drive" src="drive_mint.webp"/>
        <h1 className="logo">Car Rental</h1>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/car">Cars</Link>
          <Link to="/booking">Bookings</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login"></Link>
        </div>

        
        <Link to="/login" className="login-btn">Login</Link>

       
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/bookings" onClick={() => setMenuOpen(false)}>Bookings</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
