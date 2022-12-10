import React from "react";
import "../css/Navbar.css";
import logo from "../essential/logo.jpg";

export default function Navbar() {
  return (
    <div>
    
        <div className="container-fluid mx-3">
          <a className="navbar-brand" href="/">
            <img
              style={{ height: "50px", width: "50px", borderRadius: "50px" }}
              src={logo}
              alt="logo"
            />{" "}
            Person_Name
          </a>
       
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a
                  className=" nav-link active hover-underline-animation "
                  id="menuItem"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active hover-underline-animation"
                  id="menuItem"
                  href="/"
                >
                  Services
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active hover-underline-animation"
                  id="menuItem"
                  href="/"
                >
                  Insights
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active hover-underline-animation"
                  id="menuItem"
                  href="/"
                >
                  About Us
                </a>
              </li>{" "}
              <li className="nav-item me-3">
                <a
                  className="nav-link active hover-underline-animation"
                  id="menuItem"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item me-3">
                <img className="mt-2" src="logo\search.svg" />
              </li>
            </ul>
          </div>
        </div>
     
  );
}
