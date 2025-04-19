import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";

function AccountRecoveryOne() {
  return (
    <div className={styles.onboardingcontainer}>
      <img src={image13} alt="Logo" className={styles.logo} />
      <h1 className="headingone">Account Recovery</h1>
      <p className="mb-4">Lost your TransitPro Pass?</p>
        <p className="mb-4">Recover your account in one of these two ways.</p>
        <input
            type="checkbox"
            className="border border-gray-300 p-2 mb-4 w-64"
        />Recover using the email address on your account
        <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 mb-4 w-64"/>
            <p><a>Resend code</a></p>

            <input
            type="checkbox"
            className="border border-gray-300 p-2 mb-4 w-64"/>
        Recover using the phone number on your account  
        <div>
            <button className="bg-blue-500 text-white p-2 rounded">Next</button>
            <a href="#" className="text-blue-500 hover:underline ml-4">Back to login</a>
        </div>
        <div>
            <p><a>Help</a></p>
            <p><a>Privacy</a></p>
            <p><a>Terms</a></p>
        </div>
        <img src={image2} alt="bus" className={styles.busfooter}/>
    </div>
  );
}

export default AccountRecoveryOne;