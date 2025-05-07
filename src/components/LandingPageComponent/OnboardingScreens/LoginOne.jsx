import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginOne() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      setError("Password must be at least 8 characters and contain at least one special character.");
      return;
    }

    setError("");
    // send to backend here
    console.log("Logging in with:", { email, password });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate("/signup");
  }

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  }

  return (
    <div className="onboardingcontainer">
      <img src={image13} alt="Logo" className="logo" />
      <form className="subcontainer" onSubmit={handleSubmit}>
      <h1 className="headingone">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
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
  <a href="#" className={styles.forgotpassword} onClick={handleForgotPassword }>Forgot Password?</a>
</div>


        <button type="submit" 
        className="onboardingbutton">
          Login
        </button>
      </form>
      <p className="footerparagraph">Don't have an account? 
        <span className="footerspan">
          <a href="#" onClick={handleSignUpRedirect}>Sign up</a>
        </span>
        </p>
        <img src={image2} alt="bus" className="busfooter"/>
      </form>
      
    </div>
  );
}
export default LoginOne;
// Removed duplicate export statement







































// import image13 from "../../../assets/images/Clip path group.png";
// import styles from "../../../styles/onboarding.module.css";
// import image2 from "../../../assets/images/noto-v1_bus.png";
// import "../../../App.css";


// function LoginOne() {
//   return (
//     <div className={styles.onboardingcontainer}>
//       <img src={image13} alt="Logo" className={styles.logo} />
//       <h1 className="headingone">Login</h1>
//       <input type="text" placeholder="Email"></input>
//       <input type="password" placeholder="Password"></input>
//         <div>
//             <input type="checkbox">Remember Me</input>
//             <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
//         </div>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//         Login
//       </button>
//       <p className="mt-4 text-gray-600">Don't have an account? Sign up</p>
//       <img src={image2} alt="bus" className={styles.busfooter}/>
//     </div>
//   );
// }

// 