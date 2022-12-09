import React from "react";
import "../css/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container ">
          <div className="col-md-4 ">
            <a className="navbar-brand" href="/">
              <img
                className=""
                src="logo\7459344-removebg.png"
                style={{ height: "150px", width: "180px" }}
                alt=""
              />
            </a>
          </div>

          <div
            className=" collapse navbar-collapse col-md-8"
            id="navbarSupportedContent"
          >
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
      </nav>
    </div>
  );
}
