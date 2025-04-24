import React from 'react';
import LandingPage from './Pages/LandingPage';
import SignUpOne from './components/LandingPageComponent/OnboardingScreens/SignUpOne';
import { Routes, Route } from "react-router-dom";
import SignUpTwo from './components/LandingPageComponent/OnboardingScreens/SignUpTwo';
import CompletionLogin from './components/LandingPageComponent/OnboardingScreens/CompletionLogin';
import SplashScreen from './components/LandingPageComponent/OnboardingScreens/SplashScreen';
import { useState } from 'react';
import LoginOne from './components/LandingPageComponent/OnboardingScreens/LoginOne';
import ForgotPassword from './components/LandingPageComponent/OnboardingScreens/ForgotPassword';
import AccountRecoveryOne from './components/LandingPageComponent/OnboardingScreens/AccountRecoveryOne';
import AccountRecoveryTwo from './components/LandingPageComponent/OnboardingScreens/AccountRecoveryTwo';


function App() {


  return(
    <div>
     <Routes>
     <Route path="/" element={<LandingPage />} />
  <Route path="/loading" element={<SplashScreen />} />
  <Route path="/signup" element={<SignUpOne />} />
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
