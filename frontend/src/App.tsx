import "./App.css";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginSignup/LoginPage";
import SignupPage from "./views/LoginSignup/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
