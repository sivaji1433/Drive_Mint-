import React, { useState } from "react";
import "./Car.css";

import { Document, Packer, Paragraph, TextRun } from "docx";


const cars = [
  { id: 1, name: "AC Hatchback 4 seats", normalPrice: 2500, offerPrice: 1700, image: "https://www.savaari.com/assets/seo/savaari-indica-cab.png" },
  { id: 2, name: "AC Sedan 4 seats", normalPrice: 3000, offerPrice: 2000, image: "https://www.savaari.com/assets/seo/savaari-etios-cab.png" },
  { id: 3, name: "SUV", normalPrice: 6000, offerPrice: 2800, image: "https://www.savaari.com/assets/img/cars/Savaari-Ertiga-Cab.jpg" },
  { id: 4, name: "AC SUV Large 7 seats", normalPrice: 4000, offerPrice: 3100, image: "https://www.savaari.com/assets/seo/savaari-ertiga-cab.png" },
  { id: 5, name: "Toyota Innova Crysta", normalPrice: 6000, offerPrice: 3000, image: "https://www.savaari.com/assets/img/cars/Savaari-Crysta-Cab.jpg" },
  { id: 6, name: "Toyota Innova Car", normalPrice: 5000, offerPrice: 3800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUtFAGf5rWyvEeZoagnDxU02j1DSevuMPeA&s" },
  { id: 7, name: "ECOSPORT", normalPrice: 8700, offerPrice: 5483, image: "https://logos.skyscnr.com/images/carhire/seo/deals-images/premium.png" },
  { id: 8, name: "Luxury Car", normalPrice: 9000, offerPrice: 5500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKkrOgYL5N-jJZsw0Sy_OawEwW_nqHGYQmQ&s" },
  { id: 9, name: "Innova", normalPrice: 5000, offerPrice: 3600, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BWVjnxbnFbfwr27oe9VVGOucU_Qby-qE4g&s" },
  { id: 10, name: "BMW 5 Series ", normalPrice: 8000, offerPrice: 4600, image: "" },
  { id: 12, name: "Mahindra Thar Car", normalPrice: 6000, offerPrice: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgPSIfZ-k4QnM_K7iZ-Pp3wMoNiG3nlpfZpIJscpbusl1H65GEHn2qa1XJ5-wMVc9GDI&usqp=CAU" },
];

const Car = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [days, setDays] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleBookNow = (car) => {
    setSelectedCar(car);
  };

  const handleConfirmBooking = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pickupDate = new Date(formData.get("pickupDate"));
    const returnDate = new Date(formData.get("returnDate"));
    const timeDiff = returnDate - pickupDate;
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) || 1;
    setDays(totalDays);

    setBookingDetails({
      name: formData.get("name"),
      pickupDate: formData.get("pickupDate"),
      returnDate: formData.get("returnDate"),
      car: selectedCar,
      totalCost: selectedCar.offerPrice * totalDays,
      paymentMethod: formData.get("paymentMethod"),
    });
    setSelectedCar(null);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Add logic to process payment
    setPaymentStatus('success'); // This would be dynamic based on actual payment logic
  };

  // note pad bill

  // const handleDownloadBill = () => {
  //   if (!bookingDetails) return;
  //   const billContent = `Booking Confirmation\n\nName: ${bookingDetails.name}\nCar: ${bookingDetails.car.name}\nPickup Date: ${bookingDetails.pickupDate}\nReturn Date: ${bookingDetails.returnDate}\nDays: ${days}\nTotal Cost: ₹${bookingDetails.totalCost}\nPayment Method: ${bookingDetails.paymentMethod}`;
  //   const blob = new Blob([billContent], { type: "text/plain" });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "Booking_Confirmation.txt";
  //   link.click();
  // };


// word bill

const handleDownloadBill = () => {
  if (!bookingDetails) return;

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: "Booking Confirmation", bold: true, size: 28 })],
          }),
          new Paragraph(""),
          new Paragraph(`Name: ${bookingDetails.name}`),
          new Paragraph(`Car: ${bookingDetails.car.name}`),
          new Paragraph(`Pickup Date: ${bookingDetails.pickupDate}`),
          new Paragraph(`Return Date: ${bookingDetails.returnDate}`),
          new Paragraph(`Days: ${days}`),
          new Paragraph(`Total Cost: ₹${bookingDetails.totalCost}`),
          new Paragraph(`Payment Method: ${bookingDetails.paymentMethod}`),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Booking_Confirmation.docx";
    link.click();
  });
};


  return (
    <div className="p-4">
      <h1>Car Booking App</h1>
      {!selectedCar && !bookingDetails && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cars.map((car) => {
            const discount = Math.round(((car.normalPrice - car.offerPrice) / car.normalPrice) * 100);
            return (
              <div key={car.id} className="border p-4 rounded-lg shadow-lg">
                <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-2" />
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <p className="text-gray-600">
                  <span className="line-through text-red-500">₹{car.normalPrice}</span> {" "}
                  <span className="text-green-600 font-bold">₹{car.offerPrice}</span>
                  <span className="ml-2 text-blue-500">({discount}% off)</span>
                </p>
                <button
                  onClick={() => handleBookNow(car)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      )}

      {selectedCar && (
        <div className="booking">
          <h2 className="text-xl font-bold mb-2">Booking: {selectedCar.name}</h2>
          <form onSubmit={handleConfirmBooking}>
            <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full mb-2" required />
            <label>Pickup Date & Time:</label>
            <input type="datetime-local" name="pickupDate" className="border p-2 w-full mb-2" required />
            <label>Return Date & Time:</label>
            <input type="datetime-local" name="returnDate" className="border p-2 w-full mb-2" required />
            <label>Payment Method:</label>
            <select name="paymentMethod" className="border p-2 w-full mb-2" required>
              <option value="">Select Payment Method</option>
              {/* <option value="Cash">Cash</option> */}
              <option value="Card">Credit/Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      {bookingDetails && (
        <div className="booking">
          <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
          <p>Name: {bookingDetails.name}</p>
          <p>Car: {bookingDetails.car.name}</p>
          <p>Pickup Date: {bookingDetails.pickupDate}</p>
          <p>Return Date: {bookingDetails.returnDate}</p>
          <p>Days: {days}</p>
          <p>Total Cost: ₹{bookingDetails.totalCost}</p>
          <p>Payment Method: {bookingDetails.paymentMethod}</p>

          {/* Payment Details Section */}
          <div className="payment-form">
            <h2>Drive Mint Payment</h2>

            <form onSubmit={handlePaymentSubmit}>
              <label>
                <input type="radio" name="paymentMethod"value="card"checked={paymentMethod === 'card'} onChange={handlePaymentMethodChange}/>
                Credit Card
              </label>
              {paymentMethod === 'card' && (
                <div className="credit-card-details">
                  <label>
                    Card Number:
                    <input type="text" placeholder="Enter Card Number" />
                  </label>
                  <label>
                    Expiry Date:
                    <input type="text" placeholder="MM/YY" />
                  </label>
                  <label>
                    CVV:
                    <input type="text" placeholder="Enter CVV" />
                  </label>
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={handlePaymentMethodChange}
                />
                UPI
              </label>
              {paymentMethod === 'upi' && (
                <div className="upi-details">
                  <label>
                    UPI ID:
                    <input type="text" placeholder="Enter UPI ID" />
                  </label>
                </div>
              )}

              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi-qr"
                  checked={paymentMethod === 'upi-qr'}
                  onChange={handlePaymentMethodChange}
                />
                UPI QR Code
              </label>
              {paymentMethod === 'upi-qr' && (
                <div className="upi-qr-details">
                  <p>Scan the UPI QR code below to pay:</p>
                  <img className="phonepay" src="./phonepay.jpg" alt="UPI QR Code" />
                </div>
              )}

              <button type="submit">Submit Payment</button>
            </form>
          </div>

          {paymentStatus === 'success' && (
            <div className="payment-success">
              <h3>Payment Successful!</h3>
              <p>Your payment has been processed successfully. Thank you for renting with us!</p>
            </div>
          )}

          {paymentStatus === 'failed' && (
            <div className="payment-failed">
              <h3>Payment Failed!</h3>
              <p>Something went wrong with your payment. Please try again.</p>
            </div>
          )}

          <button onClick={handleDownloadBill} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Download Bill
          </button>
          <button onClick={() => setBookingDetails(null)} className="mt-2 ml-2 bg-gray-500 text-white px-4 py-2 rounded">
            Back to Main Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Car;
