import styles from '../../styles/style.module.css';
import image4 from "../../assets/images/Highlight 25.png";
import image5 from "../../assets/images/Highlight 11.png";
import image6 from "../../assets/images/Highlight 17.png";
import image7 from "../../assets/images/Highlight 18.png";

function SectionThree() {
  return (
    <div className={styles.features}>
      <div className={styles.featuresheader}>
        <img src={image4} alt="spiral" className={styles.Highlight} />
        <h2 className={styles.featuresh2}>FEATURES WE OFFER</h2>
        <img src={image5} alt="loveemoji" className={styles.Highlight} />
      </div>

      <div className={styles.featuresdivone}>
        <h3>REAL-TIME UPDATE</h3>
        <p>Minimize waiting time with LIVE tracking</p>
      </div>

      <div className={styles.icondivone}>
        <div className={styles.icondiv}>
          <img
            src={image6}
            alt="whiskers"
            className={`${styles.Highlight} ${styles.AnotherClass}`}
          />
        </div>
      </div>

      <div className={styles.featuresdivtwo}>
        <h3>SEAMLESS BOOKINGS</h3>
        <p>Search and book trips in seconds</p>
      </div>

      <div className={styles.icondivtwo}>
        <img src={image7} alt="roundspiral" className={styles.Highlight} />
      </div>
      <div className={styles.featuresdivthree}>
        <h3>SMART PAYMENTS</h3>
        <p>Quick and secure payments on-the-go</p>
      </div>
    </div>
  );
}

export default SectionThree;
