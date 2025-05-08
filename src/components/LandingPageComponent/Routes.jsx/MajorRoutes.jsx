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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      {/* <SearchBar search={search} setSearch={setSearch} /> */}
      <MapRoutes />
      {/* <NearbyRoutes nearbyRoutes={nearbyRoutes} /> */}
      <SectionFour />
      <Footer />
    </div>
  );
}

export default MajorRoutes;
