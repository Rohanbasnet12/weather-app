import React from "react";
import Cloudy from "../images/cloudy-day-3.svg";
import Rainy from "../images/rainy-7.svg";
import Clear from "../images/cloudy-day-3.svg";
import Snow from "../images/snowy-6.svg";
import Thunderstorm from "../images/thunder.svg";
import Mist from "../images/cloudy-night-3.svg";
import Loader from "./Loader";

const Display = ({ data, loading }) => {
  const renderWeatherIcon = (description) => {
    switch (description) {
      case "Clear":
        return <img src={Clear} alt="Clear Cloudy image" />;
      case "Clouds":
        return <img src={Cloudy} alt="Cloudy image" />;
      case "Rain":
        return <img src={Rainy} alt="Rainy image" />;
      case "Drizzle":
        return <img src={Rainy} alt="Rainy image" />;
      case "Snow":
        return <img src={Snow} alt="Snowy image" />;
      case "Thunderstorm":
        return <img src={Thunderstorm} alt="Thunderstorm image" />;
      case "Mist":
        return <img src={Mist} alt="Mist image" />;
      default:
        return <img src={Clear} alt="Clear Cloudy image" />; // Return a default icon
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
