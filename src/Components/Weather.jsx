import React from "react";
import Form from "./Form";
import "./GlassEffectBackground.css";

const Weather = () => {
  return (
    <div
      id="Weather container"
      className="glassmorphismBackground z-10 w-3/12 h-4/6 border-2 rounded-xl py-4 px-5"
    >
      <Form />
    </div>
  );
};

export default Weather;
