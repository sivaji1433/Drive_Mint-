import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registration successful!");
    
    // Clear input fields after successful registration
    setEmail("");
    setPassword("");

    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
