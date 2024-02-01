import React from "react";
import { useState } from "react";
import logo from "../../../assets/images/Logo 5.png";

const RecruiterMain = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <div className={`dashboard-nav }`}>
        <div className="menu-toggle"></div>
        <span>
          <img src={logo} alt="logo" />
        </span>

        <nav className="dashboard-nav-list">
          <a href="#" className="dashboard-nav-item active">
            <i className="fa fa-dashboard"></i> Dashboard
          </a>
          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-clone"></i> Applications{" "}
          </a>

          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-briefcase"></i> Jobs{" "}
          </a>

          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-users"></i> Staff{" "}
          </a>

          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-calendar"></i> Calendar{" "}
          </a>

          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-columns"></i> Reports{" "}
          </a>

          <a href="#" className="dashboard-nav-item">
            <i className="fa fa-cog"></i> Settings{" "}
          </a>
        </nav>
      </div>
    </>
  );
};

export default RecruiterMain;
