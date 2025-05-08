import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginOne({ onComplete }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && specialCharRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters and contain at least one special character."
      );
      return;
    }

    setError("");
    // Simulate login success and navigate to /theroutes
    sessionStorage.setItem("user", JSON.stringify({ email }));
    console.log("Logged in with:", { email, password });
    navigate("/routes");
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="onboardingcontainer">
      <img src={image13} alt="Logo" className="logo" />
      <form className="subcontainer" onSubmit={handleLogin}>
        <h1 className="headingone">Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.checkboxcontainer}>
          <div>
            <input type="checkbox" id="rememberme" />
            <label htmlFor="rememberme">Remember Me</label>
          </div>
          <a
            href="#"
            className={styles.forgotpassword}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="onboardingbutton">
          Login
        </button>
        <p className="footerparagraph">
          Don't have an account?
          <span className="footerspan">
            <a href="#" onClick={handleSignUpRedirect}>
              Sign up
            </a>
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginOne;

