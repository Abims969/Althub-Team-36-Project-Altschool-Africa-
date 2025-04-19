import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";

function SignUpCongratulations() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <img src={image13} alt="Logo" className={styles.logo} />
        <p>Your password change was successful.</p>
        <p>Try not to lose your pass again.</p>
       <div>
               <button className="bg-blue-500 text-white p-2 rounded">Login</button>
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

export default SignUpCongratulations;