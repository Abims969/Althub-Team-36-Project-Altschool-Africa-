import styles from "../style.module.css";
import image3 from "../assets/images/Frame 34.png";

function SectionTwo () {
return (
    <div className={styles.sectiontwo}>
        <div className={styles.loopone}><img src={image3} alt="yellowcard" ></img>
        
            <div className={styles.looptwo}>

                <div className={styles.boxone}>
                    <h1>CARS</h1>
                    <p>On-demand rides</p>
                </div>

                <div className={styles.boxtwo}>
                    <h1>COASTERS</h1>
                    <p>Inter-state travels</p>
                </div>

                <div className={styles.boxthree}>
                    <h1>COASTERS</h1>
                    <p>City-wide commuting</p>
                </div>

                <div className={styles.boxfour}>
                    <h1>ROUTES</h1>
                    <p>Smart Planning</p>
                </div>
                </div>
        </div>
    </div>
)}

export default SectionTwo