import { useNavigate } from "react-router-dom";
import image2 from "../../assets/images/noto-v1_bus.png";

function SectionOne() {
  const navigate = useNavigate();

  const handleNavigation = (target) => {
    navigate("/loading", { state: { target } });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-8 lg:py-16 px-6 lg:px-16 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 mt-0 lg:mt-[-10rem] text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#213547] leading-tight">
          RIDE YOUR WAY
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white bg-black inline-block py-2 px-4 mt-4 transform -rotate-6">
          THROUGH <span className="font-medium text-[#E6B93E]">AFRICA</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#213547] font-medium mt-6 mb-8 max-w-3xl mx-auto">
          Long trips have never been easier, faster, and better. Book your
          travel tickets on-the-go. Choose from a wide range of options for a
          more seamless experience.
        </p>
        <button
          onClick={() => handleNavigation("/signup")}
          className="bg-[#01A5A6] text-white py-3 px-8 sm:px-12 lg:px-16 rounded-lg shadow-md hover:bg-[#056366] transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Right Section - Bus Image */}
      <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={image2}
          alt="bus"
          className="w-full sm:w-[450px] lg:w-[510px] h-auto"
        />
      </div>
    </div>
  );
}

export default SectionOne;
