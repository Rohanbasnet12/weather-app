import React from "react";
import Cloudy from "../images/cloudy-day-3.svg";
import Loader from "./Loader";

const Display = ({ data, loading }) => {
  const renderWeatherIcon = (description) => {
    switch (description) {
      case "Clouds":
        return <img src={Cloudy} alt="Cloudy image" />;
      default:
        return null; // Return a default icon or null
    }
  };

  return (
    <div id="displayWeather" className="pt-12">
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.weather ? (
            <>
              <div
                className="weather-icon w-full py-6 flex justify-center"
                style={{ transform: "scale(3)" }}
              >
                {renderWeatherIcon(data.weather[0].main)}
              </div>
              <div className="weather flex flex-col items-center justify-center">
                {data.main ? (
                  <h1 className="text-white text-5xl font-bold flex">
                    {(data.main.temp - 273.15).toFixed(2)}{" "}
                    <span className="text-2xl font-medium">°C</span>
                  </h1>
                ) : null}
                {data.weather ? (
                  <p className="text-white text-xl font-semibold">Cloudy</p>
                ) : null}
              </div>
              <div className="weather-details flex items-center justify-between pt-12">
                <div className="feelsLike-detail text-center text-white">
                  {data.main ? (
                    <>
                      <span className="text-zinc-700 font-bold">
                        {(data.main.feels_like - 273.15).toFixed(2)}{" "}
                        <span>°C</span>
                      </span>
                      <p>Feels Like</p>
                    </>
                  ) : null}
                </div>
                <div className="humidity-detail text-center text-white">
                  {data.main ? (
                    <>
                      <span className="text-zinc-700 font-bold">
                        {data.main.humidity}
                      </span>
                      <p>Humidity</p>
                    </>
                  ) : null}
                </div>
                <div className="windSpeed-detail text-center text-white">
                  {data.wind ? (
                    <>
                      <span className="text-zinc-700 font-bold">
                        {data.wind.speed} KMPH
                      </span>
                      <p>Wind Speed</p>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <p className="pt-12 font-semibold text-center text-white">
              No Data Available
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Display;
