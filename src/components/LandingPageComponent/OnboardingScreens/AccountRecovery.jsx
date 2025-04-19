import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";

function AccountRecovery (){
    return (
        <div className={styles.onboardingcontainer}>
        <img src={image13} alt="Logo" className={styles.logo}/>
        <h1 className="headingone">Account Recovery</h1>
        <p className="text-lg mb-8">You're just one step away from receiving your pass.</p>
        <p className="mb-4">Enter the code you just received. Code expires in 60secs.</p>
        
        <div>
        <label id="accountrecovery">Enter Code</label>"
        <input type="number" placeholder="000 209" className="accountrecovery" />
        <p><a>Resend code</a></p>
        </div>

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
    )
}

export default AccountRecovery;