import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";
import "./GlassEffectBackground.css";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});

  return (
    <div
      id="Weather-container"
      className="glassmorphismBackground z-10 w-3/12 border-2 rounded-xl py-4 px-5"
    >
      <Form setData={setData} />
      <Display data={data} />
    </div>
  );
};

export default Weather;
