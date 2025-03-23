import styles from "../style.module.css";
import image2 from "../assets/images/noto-v1_bus.png";

function SectionOne() {
  return (
    <div className={styles.sectionone}>
        
        <div className={styles.leftdiv}>
      <h1 className={styles.ride}>RIDE YOUR WAY</h1>
        <h2 className={styles.through}>THROUGH <span className={styles.spanafrica}>AFRICA</span></h2>
      <p>Long trips have never been easier, faster, and better.
        Book your travel tickets on-the-go. Choose from a wide range 
        of options for a more seamless experience.
      </p>
        <button>Get Started</button>
        </div>
        
        <div className={styles.rightdiv}>
        <img src={image2} alt="bus" className={styles.bus}/>
        </div>

    </div>
  );
}

export default SectionOne;