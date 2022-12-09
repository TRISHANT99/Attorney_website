import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="heading">
        <h2>Looking For A Reliable & Dedicated Partner?</h2>
      </div>
      <div className="btnFooter">
        <button className="btnBox">CONTACT US</button>
      </div>
      <div className="flex1">
        <div className="leftSide">
          <p style={{ fontWeight: "bold" }}>CONTACT US</p>
          <i
            style={{ color: "rgb(250, 175, 90)", marginRight: "10px" }}
            className="fa-solid fa-phone"
          ></i>
          <span>+91-8937006666</span>
          <div>
            <i
              style={{ color: "rgb(250, 175, 90)", marginRight: "10px" }}
              className="fa-solid fa-envelope-open-text"
            ></i>
            <span>xyz@gmail.com</span>
          </div>
        </div>
        <div className="middleSide">
          <p style={{ fontWeight: "bold" }}>SOCIAL NETWORKS</p>
          <i
            style={{ color: "rgb(250, 175, 90)", marginRight: "10px" }}
            className="fa-brands fa-square-instagram"
          ></i>
          <span>saurabhkumar1920</span>
          <div>
            <i
              style={{ color: "rgb(250, 175, 90)", marginRight: "10px" }}
              className="fa-brands fa-linkedin"
            ></i>
            <span>xyz@gmail.com</span>
          </div>
        </div>
        <div className="rightSide">
          <p style={{ fontWeight: "bold" }}>SAURABH KUMAR CONSULTING</p>
          <div>
            <span
              style={{
                borderRight: "2px solid rgb(250, 175, 90)",
                marginRight: "5px",
                paddingRight: "5px",
              }}
            >
              Perseverance
            </span>
            <span
              style={{
                borderRight: "2px solid rgb(250, 175, 90)",
                marginRight: "5px",
                paddingRight: "5px",
              }}
            >
              Resilience
            </span>
            <span>Perfection</span>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="copyRight">
          &copy;2022 SAURABH KUMAR CONSULTING. All rights reserved.
        </div>
        <div className="footerNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                Disclaimer
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                Terms of Use
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="/">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
