import React from "react";
import image11 from "../../assets/images/Frame 52.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo */}
        <div>
          <img src={image11} alt="Transit Pro Logo White" className="w-32" />
        </div>

        {/* Navigation Columns */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 text-sm">
          <ul className="space-y-2">
            <li>
              <a href="#Home" className="hover:text-teal-400">
                Home
              </a>
            </li>
            <li>
              <a href="#Routes" className="hover:text-teal-400">
                Routes
              </a>
            </li>
            <li>
              <a href="#Bookings" className="hover:text-teal-400">
                Bookings
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#Contact_Us" className="hover:text-teal-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#About_Us" className="hover:text-teal-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#FAQs" className="hover:text-teal-400">
                FAQs
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li>
              <a href="#Privacy_Policy" className="hover:text-teal-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#Cookies_Policy" className="hover:text-teal-400">
                Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#Legal_Terms_and_Conditions"
                className="hover:text-teal-400"
              >
                Legal Terms & Conditions
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="flex items-center space-x-4">
              <a href="#Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#X_Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#Phonenumber" className="hover:text-teal-400">
                +234-000-0000-567
              </a>
            </li>
            <li>
              <a href="#Address" className="hover:text-teal-400">
                123, Hopeland Street, Somewhere - Nigeria.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
