import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      const randomOtp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate random 4-digit OTP
      setGeneratedOtp(randomOtp);
      setOtpSent(true);
      alert(`Your OTP is: ${randomOtp}`); // Simulating OTP sent (In production, use SMS API)
    } else {
      alert("Enter a valid 10-digit phone number");
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    if (otp.join("") === generatedOtp) {
      alert("OTP Verified Successfully!");
      navigate("/dashboard"); // Redirect to the dashboard page
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">OTP Login</h2>
      {!otpSent ? (
        <div>
          <input
            type="text"
            className="input-field"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSendOtp}>
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="otp-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <button className="submit-btn" onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
