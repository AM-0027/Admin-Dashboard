import React from "react";
// import "./App.css";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="logo"
          />
        </div>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
