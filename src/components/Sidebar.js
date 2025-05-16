import React from "react";
import logo from "../assets/logo.png";
import { FaBeer } from "react-icons/fa";
import "./Main.css";
import { SidebarData } from "../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = React.useState(0);

  return (
        <div className="sidebar">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>
          <div className="menu">
            {SidebarData.map((item, index) => {
              return (
                <div
                  className={
                    selected === index ? "menu-item active" : "menu-item"
                  }
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              );
            })}
          </div>
        </div>
  );
};

export default Sidebar;
