import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../assets/images/TransitPro (1) 1.png";
import styles from '../../styles/style.module.css';

function Header() {
  const navigate = useNavigate();

  // Function to route via loading screen
  const handleNavigation = (target) => {
    navigate('/loading', { state: { target } });
  };

  return (
    <header className="header">
      <div className={styles.header}>
        <img src={image1} alt="Transit Pro Logo" className={styles.image1} />
        
        <ul className={styles.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loading" state={{ target: "/routes" }}>Routes</Link>
          </li>
          <li>
            <Link to="/loading" state={{ target: "/bookings" }}>Bookings</Link>
          </li>
          <li>
            <Link to="/loading" state={{ target: "/contactus" }}>Contact Us</Link>
          </li>
        </ul>

        <div className="btn">
          <button className={styles.button1} onClick={() => handleNavigation('/signup')}>Sign Up</button>
          <button className={styles.button2} onClick={() => handleNavigation('/login')}>Log In</button>
        </div>
      </div>
      <hr />
    </header>
  );
}

export default Header;
