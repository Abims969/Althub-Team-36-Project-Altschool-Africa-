import React from "react";
import Header from "../Header";

function Contact() {
  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-xl shadow-md hover:bg-teal-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
