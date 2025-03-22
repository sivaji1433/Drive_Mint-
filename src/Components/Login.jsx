import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure your CSS file is linked

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true"); // Store login state
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
      navigate("/navbar");
    } else {
      alert("Invalid credentials!");
      setEmail(""); // Clear email field
      setPassword(""); // Clear password field
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
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
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
