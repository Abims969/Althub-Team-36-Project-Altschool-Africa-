import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";


function SignUpThree() {
  return (
    <div className={styles.onboardingcontainer}>
      <img src={image13} alt="Logo" className={styles.logo}/>
      <h1 className="headingone">Sign up</h1>
      <input type="text" placeholder="Ade Haruna"></input>
      <input type="email" placeholder="adeharuna@gmail.com"></input>
      <input type="password" placeholder=".........."></input>
      <input type="password" placeholder=".........."></input>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Sign Up
      </button>
      <p className="mt-4 text-gray-600">Already have an account? Login</p>
      <img src={image2} alt="bus" className={styles.busfooter}/>
    </div>
  );
}

export default SignUpThree;