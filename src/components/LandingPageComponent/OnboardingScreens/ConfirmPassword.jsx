import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";

function ConfirmPassword() {
  return (
    <div className="confirm-password">
        <img src={image13} alt="Logo" className={styles.logo}/>
      <h1 className="headingone">Create New Password</h1>
      <p>You can now create a new password.</p>
      <p>Please ensure your new paas is something you can
        remember easily. It must be at least 8 characters
      long with at least 1 special character.</p>

    <div>
      <label id="enternewpassword">Enter New Password</label>
      <input type="password" placeholder="New Password" id="enternewpassword"/>
      

      <label id="confirmnewpassword">Confirm New Password</label>
      <input type="password" placeholder="Confirm Password" id="comfirmnewpassword"/>
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
  );
}

export default ConfirmPassword;