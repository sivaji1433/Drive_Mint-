import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Landingpag.css';
import Pag from './Pag';
import Content from './Content';
import List from './List';
import Footer from './footer';

function Landingpag() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <>
      <nav>


        <div className="form">

        <img className='p6' src='./cars.jpg' />
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="login">Login</Link>
              {/* <Link to="/register" className="signup">Signup</Link> */}
            </>
          ) : (
            <button className="login" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <Pag />
      <Content />
      <List />
      <Footer />
    </>
  );
}

export default Landingpag;
