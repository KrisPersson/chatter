import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginSignup/LoginPage";
import SignupPage from "./views/LoginSignup/SignupPage";
import AuthenticatedLayout from "./components/AuthLayout/AuthLayout";
import Dashboard from "./views/Dashboard/Dashboard";
import Channels from "./views/Channels/Channels";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import Users from "./views/Users/Users";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyTokenApi } from "./api/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function checkToken() {
    const auth = await verifyTokenApi();
    if (!auth) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {isAuthenticated ? (
            <Route element={<AuthenticatedLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/users" element={<Users />} />
              <Route path="/chat" element={<ChatWindow />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </>
    </Router>
  );
}

export default App;
