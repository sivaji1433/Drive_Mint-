import React from 'react';
import './Image.css';  // Make sure to link to your CSS file

function Image() {
  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: "url('./car.jpg')",  // Replace with your image URL
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // This centers the content vertically
    alignItems: 'center', // This centers the content horizontally
  };

  return (
    <>
      <div style={backgroundStyle}>
        <h1 className="save">Save Up To 30% On Your Car Insurance In Minutes.</h1>

        <div className="card-container">
          <div className="card">
            <img 
              src='http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/autowa/eec3a773-save-time-1_100u00u000000000000028.png' 
              alt="Save Time" 
              className="card-image"
            />
            {/* <h4>Save up to 80% *</h4> */}
            {/* <p>Lowest Car Premiums</p> */}
          </div>

          <div className="card">
            <img 
              src='http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/autowa/999d4ed4-rupees-1_100u00u000000000000028.png' 
              alt="20+ Insurances"
              className="card-image"
            />
            {/* <h4>20+ Insurances</h4> */}
            {/* <p>To Choose From</p> */}
          </div>

          <div className="card">
            <img 
              src='http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/autowa/711155c7-car-1_100u00u000000000000028.png' 
              alt="25 Lakh+ Vehicles"
              className="card-image"
            />
            {/* <h4>25 Lakh +</h4> */}
            {/* <p>Vehicles Insured</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
