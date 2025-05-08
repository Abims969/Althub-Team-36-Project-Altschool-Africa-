import image13 from "../../../assets/images/Clip path group.png";
import image14 from "../../../assets/images/noto-v1_bus-half.png";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpOne() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && specialCharRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    sessionStorage.setItem("user", JSON.stringify({ fullName, email }));
    console.log("User registered:", { fullName, email });
    navigate("/routes"); // Updated route
  };

  const handleLoginRedirect = () => {
    navigate("/routes"); // Updated route
  };

  return (
    <div className="onboardingWrap">
      <div className="onboardingcontainer">
        <img src={image13} alt="Logo" className="logo" />
        <form className="subcontainer" onSubmit={handleSubmit}>
          <h1 className="headingone">Sign up</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="onboardingbutton">Sign Up</button>
          <p className="footerparagraph">
            Already have an account?
            <span className="footerspan">
              <a href="#" onClick={handleLoginRedirect}>
                Login
              </a>
            </span>
          </p>
        </form>
      </div>
      <img src={image14} alt="bus" className="busfooter" />
    </div>
  );
}

export default SignUpOne;
