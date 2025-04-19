import image16 from '../../../assets/images/TransitPro (1) 1.png';
import styles from "../../../styles/onboarding.module.css";
import image15 from "../../../assets/images/noto-v1_bus-tilted top.png";
import image14 from "../../../assets/images/noto-v1_bus-half.png";
import "../../../App.css";
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function SplashScreen () {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.target || '/';  // fallback to home if no target

    const timer = setTimeout(() => {
      navigate(target);
    }, 1000);  // 1 second delay

    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <div>

      <div className={styles.busfootersplashscreenone}>
      <img src={image15} alt="bus" />
      </div>

      <div className={styles.splashscreen}>
      <img src={image16} alt='onboarding_logo' />
      </div>

      <div className={styles.busfootersplashscreentwo}>
      <img src={image14} alt="bus" />
      </div>

    </div>
  );
}

export default SplashScreen;  