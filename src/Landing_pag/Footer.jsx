import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='p1'>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Car Rental </h4>
          <ul>
            <li><a href="http://localhost:5173/car">Car</a></li>
            <li><a href="http://localhost:5173/contact">Contact</a></li>
            <li><a href="http://localhost:5173/home">Home</a></li>
            <li><a href="http://localhost:5173/booking">Booking</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li>Phone: +91 9390941018</li>
            <li>Email: sivajinn993@gmail.com</li>
            <li>Address: </li>
          </ul>
        </div>
      </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Car Rental. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
