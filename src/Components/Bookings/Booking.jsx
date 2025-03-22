import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const Booking = () => {
  const [step, setStep] = useState(1); // 1: Enter Card/UPI, 2: OTP, 3: Success
  const [cardNumber, setCardNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // card or upi

  // Handle Card/UPI Details Submission
  const handlePaymentSubmit = () => {
    if (paymentMethod === 'card' && cardNumber.length === 16) {
      const otpCode = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      setGeneratedOtp(otpCode.toString());
      alert(`Your OTP is: ${otpCode}`); // Simulating OTP sent to user
      setStep(2);
    } else if (paymentMethod === 'upi' && upiId.length === 10 && upiId.includes('@upi')) {
      const otpCode = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
      setGeneratedOtp(otpCode.toString());
      alert(`Your OTP is: ${otpCode}`); // Simulating OTP sent to user
      setStep(2);
    } else {
      alert('Invalid details! Enter a valid 16-digit card number or a valid 10-character UPI ID.');
    }
  };

  // Handle OTP Verification
  const handleOtpSubmit = () => {
    if (otp === generatedOtp) {
      setStep(3); // Payment Successful
    } else {
      alert('Invalid OTP! Try again.');
    }
  };

  // Generate & Download Invoice PDF
  const handleDownloadBill = () => {
    const doc = new jsPDF();
    doc.text('Drive Mint Car Rental', 20, 20);
    doc.text('Payment Successful!', 20, 40);
    doc.text('Amount: $100', 20, 50);
    doc.text('Transaction ID: ' + Math.floor(1000000000 + Math.random() * 9000000000), 20, 60);
    doc.text('Thank you for choosing Drive Mint!', 20, 80);

    doc.save('Invoice.pdf');
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h3>Enter Payment Details</h3>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI ID
          </label>

          {paymentMethod === 'card' && (
            <div>
              <input
                type="text"
                placeholder="Enter 16-digit Card Number"
                maxLength="16"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div>
              <input
                type="text"
                placeholder="Enter 10-character UPI ID (example: user@upi)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}

          <button onClick={handlePaymentSubmit}>
            Proceed to OTP
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>Enter OTP</h3>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleOtpSubmit}>
            Verify OTP
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Payment Successful! ✅</h3>
          <button onClick={handleDownloadBill}>
            Download Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
