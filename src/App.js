import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Sidebar from "./components/Sidebar";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Sidebar />
      ) : (
        <AuthForm onLoginSuccess={() => setIsAuthenticated(true)} />
      )}  
      
      </>
  );
}

export default App;
