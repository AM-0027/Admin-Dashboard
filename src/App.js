import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Main from "./Main"; 


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Main />
      ) : (
        <AuthForm onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}

export default App;
