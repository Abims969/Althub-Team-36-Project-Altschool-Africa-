import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";
import { useState } from "react";

function ForgotPassword (){

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  

    return (
        <div className="onboardingcontainer">
        <img src={image13} alt="Logo" className="logo"  />
        <form className="subcontainer">
        <h1 className="headingone">Forgot Password</h1>
        <p className="mb-4">Lost your TransitPro Pass?</p>
        <p className="mb-4">Recover your account in one of these two ways.</p>
        

        <label htmlFor="checkboxone">
        Recover using the email address on your account
        <input
            type="checkbox"
            id="checkboxone"
        />
        </label>
        
        <label htmlFor="checkboxone">
            Recover using the phone number on your account
        <input
            type="checkbox"
            id="checkboxone"/>
            </label>
        
        <div>
            <button className="bg-blue-500 text-white p-2 rounded">Next</button>
            <a href="#" className="text-blue-500 hover:underline ml-4">Back to login</a>
        </div>
        <div>
            <p><a>Help</a></p>
            <p><a>Privacy</a></p>
            <p><a>Terms</a></p>
        </div>
        <img src={image2} alt="bus"  className="busfooter"/>
        </form>
        </div>
        
    ); 
}

export default ForgotPassword; 