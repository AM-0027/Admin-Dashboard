import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide"
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <div className="main">
          <div className="Glass">
            <Sidebar />
            <MainDash />
            <RightSide />
          </div>
        </div>
      ) : (
        <AuthForm onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
