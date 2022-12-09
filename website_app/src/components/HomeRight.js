import React from "react";
import "../css/HomeRight.css";
import main from "../essential/main.jpg";

export default function HomeRight() {
  return (
    <div className="right">
      <div className="rightImg">
        <img src={main} alt="mainPic" />
      </div>
    </div>
  );
}
