import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image2 from "../../../assets/images/noto-v1_bus.png";
import "../../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextPrompt = (e) => {
    e.preventDefault();
    if (selectedOption === "email") {
      navigate("/accountrecoveryone");
    } else if (selectedOption === "phone") {
      navigate("/accountrecoverytwo");
    } else {
      alert("Please select one recovery option.");
    }
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="onboardingcontainer flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={image13} alt="Logo" className="logo mb-6 mt-4" />
      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center"
        onSubmit={handleNextPrompt}
      >
        <h1 className="text-teal-600 text-xl font-semibold mb-2">Forgot Password</h1>
        <p className="text-sm mb-1 text-gray-700">Lost your TransitPro Pass?</p>
        <p className="text-sm mb-4 text-gray-600">
          Recover your account in one of these two ways.
        </p>

        <div className="text-left mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="recovery"
              value="email"
              checked={selectedOption === "email"}
              onChange={handleOptionChange}
              className="mr-2 accent-teal-500"
            />
            <span className="font-semibold text-gray-900">
              Recover using the email address on your account
            </span>
          </label>
          <label className="block">
            <input
              type="radio"
              name="recovery"
              value="phone"
              checked={selectedOption === "phone"}
              onChange={handleOptionChange}
              className="mr-2 accent-teal-500"
            />
            <span className="font-semibold text-gray-900">
              Recover using the phone number on your account
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-3"
        >
          Next
        </button>

        <a
          href="#"
          onClick={handleLoginRedirect}
          className="text-sm text-teal-600 hover:underline"
        >
          Back to login
        </a>

        <div className="mt-6 text-xs text-gray-500 flex justify-between px-4">
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <img src={image2} alt="bus" className="mx-auto mt-4 w-12" />
      </form>
    </div>
  );
}

export default ForgotPassword;
