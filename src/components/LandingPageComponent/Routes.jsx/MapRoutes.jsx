import mapImage from "../../../assets/images/Frame 168.png";
import styles from "../../../styles/style.module.css";

function MapRoutes() {

    

  return (
    <div className={styles.mapContainer}>
   <img src={mapImage} alt="Map" className="map-image" />
    </div>
  );
}

export default MapRoutes;