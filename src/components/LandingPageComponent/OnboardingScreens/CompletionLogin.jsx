import image13 from "../../../assets/images/Clip path group.png";
import styles from "../../../styles/onboarding.module.css";
import image14 from "../../../assets/images/noto-v1_bus-half.png";
import "../../../App.css";


function CompletionLogin({ onComplete }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={image13} alt="Logo" className="logo"/>
      <form>
      <h1 className="text-2xl font-bold mb-4">Welcome to TransitPro!</h1>
      <input type="email" placeholder="Email"  required />
      <input type="password" placeholder="Password"  required />
      <div>
        <input type="checkbox" /> Remember Me
        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
      </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onComplete}>
            Login 
        </button>
        <p className="mt-4 text-gray-600">Don't have an account? 
            <span><a href="#">Sign up</a></span></p>  
        <img src={image14} alt="bus" className="busfooter" />
      </form>
    </div>
  );
}

export default CompletionLogin;