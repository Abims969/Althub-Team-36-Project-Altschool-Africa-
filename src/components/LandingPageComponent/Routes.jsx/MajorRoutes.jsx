<<<<<<< HEAD
import React from "react";
import Header from "../Header";
import SectionFour from "../SectionFour";
import Footer from "../Footer";
import MapRoutes from "../Routes.jsx/MapRoutes";

function MajorRoutes() {
  // const [search, setSearch] = React.useState("");
  // const [nearbyRoutes, setNearbyRoutes] = React.useState([
  //     { name: "Route A", distance: 1.2 },
  //     { name: "Route B", distance: 0.8 },
  //     { name: "Route C", distance: 2.5 },
  // ]);
  // const [selectedOption, setSelectedOption] = React.useState("option1");
  // const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  // };
  // const handleSearchChange = (event) => {
  //     setSearch(event.target.value);
  // };
  // const handleNearbyRoutesChange = (newRoutes) => {
  //     setNearbyRoutes(newRoutes);
  // };
  // const handleSearchSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle search submission logic here
  //     console.log("Search submitted:", search);
  // };
  // const handleNearbyRoutesSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle nearby routes submission logic here
  //     console.log("Nearby routes submitted:", nearbyRoutes);
  // };
  // const handleSearchReset = () => {
  //     setSearch("");
  // };
  // const handleNearbyRoutesReset = () => {
  //     setNearbyRoutes([
  //         { name: "Route A", distance: 1.2 },
  //         { name: "Route B", distance: 0.8 },
  //         { name: "Route C", distance: 2.5 },
  //     ]);
  // };

  // const handleNearbyRoutesUpdate = (newRoutes) => {
  //     setNearbyRoutes(newRoutes);
  // }
  // const handleSearchUpdate = (newSearch) => {
  //     setSearch(newSearch);
  // };

  // const handleOptionUpdate = (newOption) => {
  //     setSelectedOption(newOption);
  // }

  // const handleNearbyRoutesChange = (newRoutes) => {
  //     setNearbyRoutes(newRoutes);
  // };
  // const handleSearchChange = (newSearch) => {
  //     setSearch(newSearch);
  // };
  // const handleNearbyRoutesSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle nearby routes submission logic here
  //     console.log("Nearby routes submitted:", nearbyRoutes);
  // };

  // const handleSearchSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle search submission logic here
  //     console.log("Search submitted:", search);
  // }

  // const handleSearchReset = () => {
  //     setSearch("");
  // };
  // const handleNearbyRoutesReset = () => {
  //     setNearbyRoutes([
  //         { name: "Route A", distance: 1.2 },
  //         { name: "Route B", distance: 0.8 },
  //         { name: "Route C", distance: 2.5 },
  //     ]);
  // };

  // const handleNearbyRoutesUpdate = (newRoutes) => {
  //     setNearbyRoutes(newRoutes);
  // }

  // const handleSearchUpdate = (newSearch) => {
  //     setSearch(newSearch);
  // };
  // const handleOptionUpdate = (newOption) => {
  //     setSelectedOption(newOption);
  // }

  // const handleNearbyRoutesChange = (newRoutes) => {
  //     setNearbyRoutes(newRoutes);
  // };
  // const handleSearchChange = (newSearch) => {
  //     setSearch(newSearch);
  // };

  // const handleNearbyRoutesSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle nearby routes submission logic here
  //     console.log("Nearby routes submitted:", nearbyRoutes);
  // }
  // const handleSearchSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle search submission logic here
  //     console.log("Search submitted:", search);
  // }
  // const handleSearchReset = () => {
  //     setSearch("");
  // };
  // const handleNearbyRoutesReset = () => {
  //     setNearbyRoutes([
  //         { name: "Route A", distance: 1.2 },
  //         { name: "Route B", distance: 0.8 },
  //         { name: "Route C", distance: 2.5 },
  //     ]);
  // };

=======
import Header from "../Header"
import SectionFour from "../SectionFour"
import Footer from "../Footer"
import WorldMap from "./WorldMap"

function MajorRoutes() {
>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
<<<<<<< HEAD
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      <MapRoutes />
      {/* <NearbyRoutes nearbyRoutes={nearbyRoutes} /> */}
=======
      <main className="flex-1">
        <WorldMap />
      </main>
>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
      <SectionFour />
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default MajorRoutes;
=======
export default MajorRoutes
>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
