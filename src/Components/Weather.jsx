import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";
import "./GlassEffectBackground.css";
import "./Weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [loadingData, setLoadingData] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div
      id="Weather-container"
      className="glassmorphismBackground z-10 w-3/12 border-2 rounded-xl py-4 px-5"
    >
      <Form setData={setData} setLoading={setLoading} />
      <Display data={data} loading={loading} />
    </div>
  );
};

export default Weather;
