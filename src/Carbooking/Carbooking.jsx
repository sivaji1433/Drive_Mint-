import React, { useState } from "react";


function CarBooking() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      pickupLocation,
      dropLocation,
      pickupTime,
      dropTime,
    });
  };

  return (
    <div className="booking-container">
      <div className="form-container">
        <h2>Car Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Pickup Location</label>
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="Enter Pickup Location"
              required
            />
          </div>

          <div className="form-group">
            <label>Drop Location</label>
            <input
              type="text"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              placeholder="Enter Drop Location"
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Time</label>
            <input
              type="datetime-local"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Drop Time</label>
            <input
              type="datetime-local"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
              required
            />
          </div>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default CarBooking;
