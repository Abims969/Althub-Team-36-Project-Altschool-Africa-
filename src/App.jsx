import React from 'react';
import LandingPage from './Pages/LandingPage';
import Header from "./components/LandingPageComponent/Header";
import SignUpOne from './components/LandingPageComponent/OnboardingScreens/SignUpOne';
import { Routes, Route } from "react-router-dom";
import SignUpTwo from './components/LandingPageComponent/OnboardingScreens/SignUpTwo';
import SplashScreen from './components/LandingPageComponent/OnboardingScreens/SplashScreen';
<<<<<<< HEAD
=======
// import { useState } from 'react';
>>>>>>> 76027af03bf8f67bf7c7090d244fbfde47738d37
import LoginOne from './components/LandingPageComponent/OnboardingScreens/LoginOne';
import ForgotPassword from './components/LandingPageComponent/OnboardingScreens/ForgotPassword';
import AccountRecoveryOne from './components/LandingPageComponent/OnboardingScreens/AccountRecoveryOne';
import AccountRecoveryTwo from './components/LandingPageComponent/OnboardingScreens/AccountRecoveryTwo';
import MajorRoutes from './components/LandingPageComponent/Routes.jsx/MajorRoutes';
import Booking from './components/LandingPageComponent/Routes.jsx/Booking';
import Contact from './components/LandingPageComponent/Routes.jsx/Contact';


function App() {


  return(
    <div>
     <Routes>
     <Route path="/" element={<LandingPage />} />     <Route path="/header" element={<Header/>} />
  <Route path="/loading" element={<SplashScreen />} />
  <Route path="/home" element={<LandingPage />} />
  <Route path="/routes" element={<MajorRoutes />} />
  {/* <Route path="/bookings" element={<LandingPage />} /> */}
  <Route path="/contactus" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpOne />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<LoginOne />} />
  <Route path="/onboarding" element={<SignUpTwo />} />
  <Route path="/forgotpassword" element={<ForgotPassword />} />
  <Route path="/accountrecoveryone" element={<AccountRecoveryOne />} />
  <Route path="/accountrecoverytwo" element={<AccountRecoveryTwo/>} />
    </Routes>
    </div>
  )
}
export default App
