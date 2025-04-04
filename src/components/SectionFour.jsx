import styles from "../style.module.css";
import image8 from "../assets/images/TransitPro Splash.png";
import image9 from "../assets/images/image 1.png";
import image10 from "../assets/images/image 2.png";

function SectionFour() {
  return (
    <div className={styles.sectionfour}>
        <div className={styles.sectionfourdivone}>
      <div>
    <img src={image8} alt="TransitPro Splash" className={styles.phoneimage} />
      </div>

      <div className={styles.sectionfourdivtwo}>
        <h1>GET STARTED IN 3 STEPS:</h1>
        <ul>
            <li className={styles.li}>Search on Play Store or scan QR code</li>
            <li className={styles.li}>Install into your device</li>
            <li className={styles.li}>Enjoy your trips with ease</li>
        </ul>
      
      
      <div className={styles.qrcodeandplaystore}>
        
      <img src={image9} alt="QR code" className={styles.qrcode} /> 
      <p className={styles.para}>OR</p>
      <img src={image10} alt="Playstore" className={styles.playstore} />
      </div>
      </div>
      </div>
    </div>
  );
}

export default SectionFour;