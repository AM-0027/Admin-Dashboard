import React from "react";
import { useState } from "react";
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Authentication Form
export default function AuthForm({onLoginSuccess}) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [confirmedpassword, setconfirmedpassword] = React.useState("");

  const validateEmail = (email) => {
    const pattren = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattren.test(email);
  };

  const handlelogin = () => {
    if (!validateEmail(email)) {
      toast.error("INVALID EMAIL");
    } else if (password.length < 6) {
      toast.error("PASSWORD LENGTH MUST ME 6 LETTERS");
    } else {
      toast.success("LOGIN SUCCESSFULLY:>");
      setTimeout(()=> onLoginSuccess(), 1000);
    }
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      toast.error("INVALID EMAIL");
    } else if (password.length < 6) {
      toast.error("PASSWORD MUST BE 6 LETTERS");
    } else if (password !== confirmedpassword) {
      toast.error("PASSWORD NOT MATCH");
    } else {
      toast.success("SIGNUP SUCCESSFULLY:>");
    } 
   };

  return (
    <>
      {/* Authentication Form */}
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="form">
                <h2>Login Form</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <a href="#">Forget Password?</a>
                <button className="toast" onClick={handlelogin}>
                  Login
                </button>
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    SignUp Now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>SignUp Form</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmedpassword}
                  onChange={(e) => setconfirmedpassword(e.target.value)}
                />
                <button onClick={handleSignUp}>SignUp</button>
              </div>
            </>
          )}
        </div>
        {/* Create a Toastify Container using toast  */}
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
      </div>
    </>
  );
}
