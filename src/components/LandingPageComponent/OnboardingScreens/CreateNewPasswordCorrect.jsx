import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";

function CreateNewPasswordCorrect() {
  return (
    <div className="onboardingcontainer">
      <img src={image13} alt="Logo" className={styles.logo} />
      <h1 className="headingone">Create New Password</h1>
      <p>Your password has been successfully updated!</p>

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

export default CreateNewPasswordCorrect;