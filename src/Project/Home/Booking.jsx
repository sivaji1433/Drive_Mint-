
import React, { useState } from 'react';
import './Booking.css'


const booking = () => {



    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply log the data to the console.
    console.log('Booking Data:', formData);
    setSubmitted(true);
    // Reset the form (optional)
    setFormData({
      name: '',
      email: '',
      pickupDate: '',
      returnDate: '',
      carType: '',
    });
  };

  return (
<div className='hello'>

    <div className="booking-form-container"  
    // // style={{
    //     backgroundImage: "url('drive_mint.webp')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     minHeight: "80vh",
    //     // display: "flex",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //   // }}
    >
      <h2>Car Booking Form</h2>
      {submitted && <p className="success-message">Booking submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="pickupDate">Pickup Date:</label>
          <input 
            type="date" 
            id="pickupDate" 
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input 
            type="date" 
            id="returnDate" 
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="carType">Car Type:</label>
          <select 
            id="carType" 
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Car Type--</option>
            <option value="economy">Economy</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Book Car</button>
      </form>
    </div>

    </div>
  );
};

export default booking
