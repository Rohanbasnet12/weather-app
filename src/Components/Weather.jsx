import React from "react";
import Form from "./Form";

const Weather = () => {

  const glassmorphismBackground = {
    background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  }

  return (
    <div
      id="Weather container"
      className="z-10 w-2/6 h-4/6 border-2 rounded-xl"
    >
      <Form />
    </div>
  );
};

export default Weather;
