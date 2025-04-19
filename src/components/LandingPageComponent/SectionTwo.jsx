import styles from '../../styles/style.module.css';
import image3 from "../../assets/images/Frame 34.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBusSimple, faVanShuttle, faLocationDot, } from '@fortawesome/free-solid-svg-icons';


function SectionTwo () {
return (
    <div className={styles.sectiontwo}>
        <div className={styles.loopone}>
            <img src={image3} alt="yellowcard" />

            <div className={styles.looptwo}>

                <div className={styles.firstcolumn}>
                <div className={styles.boxone}>
                <FontAwesomeIcon icon={faCar} style={{ color: "#010409",
                    height: "30px",
                    width: "30px",
                 }} />
                    <h1>CARS</h1>
                    <p>On-demand rides</p>
                </div>
                
                <div className={styles.boxtwo}>
                <FontAwesomeIcon icon={faBusSimple} style={{ color: "#010409",
                    height: "30px",
                    width: "30px",
                 }} />
                    <h1>COASTERS</h1>
                    <p>Inter-state travels</p>
                </div>
                </div>


                <div className={styles.secondcolumn}>
                <div className={styles.boxthree}>
                <FontAwesomeIcon icon={faVanShuttle} style={{ color: "#010409",
                    height: "30px",
                    width: "30px",
                }} />
                    <h1>BUSES</h1>
                    <p>City-wide commuting</p>
                </div>

                
                <div className={styles.boxfour}>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#010409",
                    height: "30px",
                    width: "30px",
                 }} />
                    <h1>ROUTES</h1>
                    <p>Smart Planning</p>
                </div>
                
                </div>
            </div>
        </div>
    </div>
);
}

export default SectionTwo