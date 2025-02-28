import React, { useState } from "react";
import "./Car.css"; 

const cars = [
  { id: 1, name: "AC Hatchback 4 seats", price: "$50/day", image: "https://www.savaari.com/assets/seo/savaari-indica-cab.png" },
  { id: 2, name: "AC Sedan 4 seats ", price: "$45/day", image: "https://www.savaari.com/assets/seo/savaari-etios-cab.png" },
  { id: 3, name: "BMW X5", price: "$100/day", image: "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Maruti_suzuki_baleno.jpg" },
  
  { id: 4, name: " AC SUV Large 7 seats", price: "$50/day", image: "https://www.savaari.com/assets/seo/savaari-ertiga-cab.png" },
  { id: 5, name: "Honda Civic", price: "$45/day", image: "" },
  { id: 6, name: "BMW X5", price: "$100/day", image: "" },
  
  { id: 7, name: "Full Size Van 12 seats", price: "$50/day", image: "https://www.savaari.com/assets/seo/savaari-tempo-traveller.png" },
  { id: 8, name: "Honda Civic", price: "$45/day", image: "" },
  { id: 9, name: "BMW X5", price: "$100/day", image: "https://via.placeholder.com/150" },
  
  { id: 10, name: "Toyota Camry", price: "$50/day", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Honda Civic", price: "$45/day", image: "https://via.placeholder.com/150" },
  { id: 12, name: "BMW X5", price: "$100/day", image: "https://via.placeholder.com/150" },



];

const Car = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookNow = (car) => {
    setSelectedCar(car);
  };

  const handleConfirmBooking = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setBookingDetails({
      name: formData.get("name"),
      date: formData.get("date"),
      car: selectedCar,
    });
    setSelectedCar(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Car Booking App</h1>

      {!selectedCar && !bookingDetails && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-lg">
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-gray-600">{car.price}</p>
              <button
                onClick={() => handleBookNow(car)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedCar && (
        <div className="p-4 border mt-4">
          <h2 className="text-xl font-bold mb-2">Booking: {selectedCar.name}</h2>
          <form onSubmit={handleConfirmBooking}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 w-full mb-2"
              required
            />
            <input
              type="date"
              name="date"
              className="border p-2 w-full mb-2"
              required
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      {bookingDetails && (
        <div className="p-4 border mt-4">
          <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
          <p>Name: {bookingDetails.name}</p>
          <p>Car: {bookingDetails.car.name}</p>
          <p>Date: {bookingDetails.date}</p>
          <button onClick={() => setBookingDetails(null)} className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
            Book Another Car
          </button>
        </div>
      )}
    </div>
  );
};

export default Car;
