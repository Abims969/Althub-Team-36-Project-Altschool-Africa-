import React from "react";
import image1 from "../../assets/images/TransitPro (1) 1.png";
import styles from '../../styles/style.module.css';
import { useNavigate } from "react-router-dom";

function Header () {

const navigate=useNavigate();

  // Function to handle navigation
    const handleNavigation = (target) => {
      navigate('/loading', { state: { target } });
    };

    const handleRouteNavigation = () => {
      const target = '/routes'; // Define the target route here
      navigate('/loading', { state: { target } });
    }

    const handleBookingsNavigation = () => {
      const target = '/bookings'; // Define the target route here
      navigate('/loading', { state: { target } });
    }

    const handleContactUsNavigation = () => {
      const target = '/contactus'; // Define the target route here
      navigate('/loading', { state: { target } });
    }

  return (
    <header className="header">
      <div className={styles.header}>
        <img src={image1} alt="Transit Pro Logo" className={styles.image1} />
        <ul className={styles.ul}>
          <li>
            Home
          </li>
          <li onClick={() => handleRouteNavigation('/routes')}>
            Routes
          </li>
          <li onClick={() => handleBookingsNavigation('/bookings')}>
           Bookings
          </li>
          <li onClick={() => handleContactUsNavigation('/contactus')}>
            Contact Us
          </li>
        </ul>

        <div className="btn">
          <button className={styles.button1} onClick={() => handleNavigation('/signup')}>Sign Up</button>
          <button className={styles.button2} onClick={() => handleNavigation('/login')}>Log In</button>
        </div>
      </div>
      <hr></hr>
    </header>
  );
}

export default Header;
