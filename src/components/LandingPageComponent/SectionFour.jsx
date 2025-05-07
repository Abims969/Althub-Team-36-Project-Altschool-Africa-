import image8 from "../../assets/images/TransitPro Splash.png";
import image9 from "../../assets/images/image 1.png";
import image10 from "../../assets/images/image 2.png";

function SectionFour() {
  return (
    <div className="bg-[#F2F8F5] w-full py-1 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 max-w-[90rem] mx-auto px-4 md:px-20">
        {/* Left Image */}
        <div className="mt-24">
          <img
            src={image8}
            alt="TransitPro Splash"
            className="w-[32rem] max-w-full object-contain hidden lg:block"
          />
        </div>

        {/* Right Text Section */}
        <div className="mt-24 lg:mt-40 mb-12 lg:mb-0 lg:-ml-40 max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            GET STARTED IN 3 STEPS:
          </h1>
          <ul className="list-disc list-inside text-black font-medium space-y-2 mb-6">
            <li>Search on Play Store or scan QR code</li>
            <li>Install into your device</li>
            <li>Enjoy your trips with ease</li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-4">
            <img
              src={image9}
              alt="QR Code"
              className="w-44 h-44 object-contain"
            />
            <p className="mx-4 text-gray-700 font-semibold">OR</p>
            <img
              src={image10}
              alt="Playstore"
              className="w-36 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
