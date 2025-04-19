

import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
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
      setError("Password must be at least 8 characters long and contain at least one special character.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // Send data to backend here
    console.log("User registered:", { fullName, email, password });
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  }
  

  return (
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
        <button className="onboardingbutton">
          Sign Up
        </button>
        <p className="footerparagraph">
          Already have an account? 
          <span className="footerspan">
            <a href="#" onClick={handleLoginRedirect}>Login</a>
          </span>
        </p>
        <img src={image14} alt="bus" className="busfooter" />
      </form>
    </div>
  );
}

export default SignUpOne;












































// import image13 from "../../../assets/images/Clip path group.png";
// import styles from "../../../styles/onboarding.module.css";
// import image14 from "../../../assets/images/noto-v1_bus-half.png";
// import "../../../App.css";
// import { useNavigate } from "react-router-dom";


// function SignUpOne() {

//   const navigate=useNavigate();

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     navigate("/login");
//     // Add your form submission logic here
//   };  


//   return (
//     <div className="onboardingcontainer">
//       <img src={image13} alt="Logo" className="logo"/>
//       <form className="subcontainer" onSubmit={handleSubmit}>
//       <h1 className="headingone">Sign up</h1>
//       <input type="text" placeholder="Full name"></input>
//       <input type="email" placeholder="Email"></input>
//       <input type="password" placeholder="Password"></input>
//       <input type="password" placeholder="Confirm Password"></input>
//       <button className="onboardingbutton">
//         Sign Up
//       </button>
//       <p className="footerparagraph">Already have an account? 
//         <span className="footerspan">
//           <a href="#">Login</a>
//           </span></p>
//       <img src={image14} alt="bus" className="busfooter"/>
//       </form>
      
//     </div>
//   );
// }

// export default SignUpOne;