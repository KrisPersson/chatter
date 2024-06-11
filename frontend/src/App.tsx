import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginSignup/LoginPage";
import SignupPage from "./views/LoginSignup/SignupPage";
import AuthenticatedLayout from "./components/AuthLayout/AuthLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { verifyTokenApi } from "./api/auth";

async function App() {
  const auth = await verifyTokenApi();
  console.log("verify current token: ", auth);
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
