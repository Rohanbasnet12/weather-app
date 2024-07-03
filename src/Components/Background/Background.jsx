import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="Background-wrapper fixed top-0 left-0 z-10 w-full h-screen">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Background;
