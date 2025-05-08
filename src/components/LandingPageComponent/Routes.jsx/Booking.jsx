import { FaCalendarTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function Booking() {
    const navigate = useNavigate();
    return (
        <>
      <Header/>
    <div className="flex justify-center items-center min-h-[60vh] bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <FaCalendarTimes className="text-4xl text-teal-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No Bookings Yet
        </h2>
        <p className="text-gray-500">
          You haven’t made any bookings at the moment.
        </p>

        <button className="mt-6 px-6 py-3 bg-teal-600 cursor-pointer text-white rounded-xl shadow-md hover:bg-teal-700 transition-colors duration-300" onClick={() => navigate("/")}>
          Go Back to Home
        </button>
      </div>
    </div>
        </>
  );
}

export default Booking;
