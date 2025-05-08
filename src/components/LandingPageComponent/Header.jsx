<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/TransitPro (1) 1.png";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (target) => {
    navigate("/loading", { state: { target } });
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-20 py-4 flex-wrap">
        {/* Logo */}
        <img src={image1} alt="Transit Pro Logo" className="h-10 sm:h-12" />

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex gap-12 text-black font-medium cursor-pointer"
          style={{ color: "black" }}
        >
          <li
            onClick={() => handleNavigation("/")}
            className="text-black"
            style={{ color: "black" }}
          >
            Home
          </li>
          <li
            onClick={() => handleNavigation("/routes")}
            style={{ color: "black" }}
          >
            Routes
          </li>
          <li
            onClick={() => handleNavigation("/booking")}
            style={{ color: "black" }}
          >
            Bookings
          </li>
          <li
            onClick={() => handleNavigation("/contact")}
            style={{ color: "black" }}
          >
            Contact Us
>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex sm:flex gap-3 mt-4 sm:mt-0">
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow border border-black hover:bg-teal-700 transition"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-md shadow border border-black hover:bg-gray-200 transition"
            onClick={() => handleNavigation("/login")}
          >
            Log In
          </button>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col space-y-2 font-medium">
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/routes")}>Routes</li>
            <li onClick={() => handleNavigation("/booking")}>Bookings</li>
            <li onClick={() => handleNavigation("/contactus")}>Contact Us</li>
          </ul>
          <div className="flex flex-col gap-2 pt-3">
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md shadow border border-black hover:bg-teal-700 transition"
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up
            </button>
            <button
              className="bg-white text-black px-4 py-2 rounded-md shadow border border-black hover:bg-gray-200 transition"
              onClick={() => handleNavigation("/login")}
            >
              Log In
            </button>
          </div>
        </div>
      )}

>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
      <hr />
    </header>
  );
}

export default Header;
