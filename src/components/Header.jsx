import React from "react";
import image1 from "../assets/images/TransitPro (1) 1.png";
import styles from "../style.module.css";

function Header() {
  return (
    <header className="header">
      <div className={styles.header}>
        <img src={image1} alt="Transit Pro Logo" className={styles.image1} />
        <ul className={styles.ul}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#routes">Routes</a>
          </li>
          <li>
            <a href="#bookings">Bookings</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>

        <div className="btn">
          <button className={styles.button1}>Sign Up</button>
          <button className={styles.button2}>Log In</button>
        </div>
      </div>
      <hr></hr>
    </header>
  );
}

export default Header;
