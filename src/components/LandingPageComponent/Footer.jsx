import styles from '../../styles/style.module.css';
import React from "react";
import image11 from "../../assets/images/Frame 52.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (<div>
        <footer className={styles.footer}>
        <div className={styles.footerdiv}>
            <div className={styles.footerone}>
            <img src={image11} alt="Transit Pro Logo White" />
            </div>
            
        <div className={styles.footertwo}>
        <ul className={styles.divone}>
                <li className={styles.lione}><a href="#Home">Home</a></li>
                <li className={styles.lione}><a href="#Routes">Routes</a></li>
                <li className={styles.lione}><a href="#Bookings">Bookings</a></li>
            </ul>
        </div>

        <div className={styles.footerthree}>
        <ul className={styles.divtwo}>
                <li className={styles.litwo}><a href="#Contact_Us">Contact Us</a></li>
                <li className={styles.litwo}><a href="#About_Us">About Us</a></li>
                <li className={styles.litwo}><a href="#FAQs">FAQs</a></li>
            </ul>
        </div>

        <div className={styles.footerfour}>
        <ul className={styles.divthree}>
                <li className={styles.lithree}><a href="#Privacy_Policy">Privacy Policy</a></li>
                <li className={styles.lithree}><a href="#Cookies_Policy">Cookies Policy</a></li>
                <li className={styles.lithree}><a href="#Legal_Terms_and_Conditions">Legal Terms and Conditions</a></li>
            </ul>
        </div>

        <div className={styles.footerfive}>
        <ul className={styles.divfour}>

                <li className={styles.lifour}>
                <a href="#Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{color: "white",}} />
                </a>

                <a href="#Facebbok">
                <FontAwesomeIcon icon={faFacebookF} style={{color: "white", paddingLeft:"1rem"}} />
                </a>

                <a href="#X_Twitter">
                <FontAwesomeIcon icon={faXTwitter} style={{color: "white", paddingLeft:"1rem"}} />
                </a>

                </li>

                <li className={styles.lifour}><a href="#Phonenumber">+234-000-0000-567</a></li>
                <li className={styles.lifour}><a href="#Address">123, Hopeland Street, Somewhere - Nigeria.</a></li>
            </ul>
            </div>
        </div>
        </footer>
    </div>)
}

export default Footer;