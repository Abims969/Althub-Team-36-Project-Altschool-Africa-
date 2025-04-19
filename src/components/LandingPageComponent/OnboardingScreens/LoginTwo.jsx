import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";


function LoginTwo () {
  return (
    <div className={styles.onboardingcontainer}>
          <img src={image13} alt="Logo" className={styles.logo} />
          <h1 className="headingone">Login</h1>
          <input type="text" placeholder="adeharuna@gmail.com"></input>
          <input type="password" placeholder=".........."></input>
            <div>
                <input type="checkbox">Remember Me</input>
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Login
          </button>
          <p className="mt-4 text-gray-600">Don't have an account? Sign up</p>
          <img src={image2} alt="bus" className={styles.busfooter}/>
        </div>
  )
}

export default LoginTwo;