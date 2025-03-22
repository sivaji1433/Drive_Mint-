import React from "react";
import "./CarList.css"; // Import the CSS file

const carData = [
  {
    
    id: 1,
    name: "GRAND i10",
    price: 1800,
    // rating: 4.7,
    img: "https://www.savaari.com/assets/seo/savaari-etios-cab.png",
    type: "HATCHBACK",
    seats: 5,
    luggage: 3,
    fuel: "YES",
    kilometer: 300,
    extraKm: 8,
    extraHr: 200,
   
  },
  {
    id: 2,
    name: "INNOVA CRYSTA MT ",
    price: 2000,
    // rating: 4.5,
    img: "https://www.savaari.com/assets/seo/savaari-ertiga-cab.png",
    type: "SEDAN",
    seats: 5,
    luggage: 3,
    fuel: "YES",
    kilometer: 300,
    extraKm: 10,
    extraHr: 300,
  },
  {
    id: 3,
    name: "ECOSPORT",
    price: 5483,
    // rating: 4.9,
    img: "https://logos.skyscnr.com/images/carhire/seo/deals-images/premium.png",
    type: "SUV",
    seats: 5,
    luggage: 3,
    fuel: "YES",
    kilometer: 300,
    extraKm: 12,
    extraHr: 350,
  },
];

const CarCard = ({ car }) => {
  return (
    <div className="car-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
      <img src={car.img} alt={car.name} className="w-full h-40 object-cover rounded-lg" />
      
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-lg font-semibold">{car.name}</h2>
        {/* <span className="bg-yellow-400 px-2 py-1 rounded text-sm">{car.rating} ⭐</span> */}
      </div>

      <p className="text-red-500 font-bold">24hrs: {car.price}/-</p>

      <div className="text-sm mt-2">
        <p><strong>Kilometer:</strong> {car.kilometer}/Day</p>
        <p><strong>Extra Km:</strong> {car.extraKm}/Km</p>
        <p><strong>Extra Hr:</strong> {car.extraHr}/Hr</p>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <p><strong>Type:</strong> {car.type}</p>
        <p><strong>Seats:</strong> {car.seats}</p>
        <p><strong>Luggage:</strong> {car.luggage}</p>
        <p><strong>Fuel:</strong> {car.fuel}</p>
      </div>

      <div className="flex justify-between mt-4">
        {/* <button className="">Call</button> */}
        <button className=""><a href="http://localhost:5173/car">Book</a></button>
      </div>
    </div>
  );
};

const CarList = () => {
  return (
    <div className="car-list-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center p-8">
      {carData.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
