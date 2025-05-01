function NearbyRoutes({ nearbyRoutes }) {

    // This component receives nearbyRoutes as a prop and displays them
    // You can also add functionality to fetch nearby routes from an API if needed
    // and handle nearby routes submission logic here

  return (
    <div className="nearby-routes">
      <h2>Nearby Routes</h2>
      <ul>
        {nearbyRoutes.map((route, index) => (
          <li key={index}>
            <strong>Route Name:</strong> {route.name} <br />
            <strong>Distance:</strong> {route.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NearbyRoutes;