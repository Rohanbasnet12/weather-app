import axios from "axios";
import React, { useState } from "react";

const Form = ({ setData, setLoading }) => {
  const [location, setLocation] = useState("");

  const apiKey = "c88c80a6d0ca365c7ef9102ec78af796";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });

      setLocation("");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form>
        <div className="input-box flex gap-2 items-center justify-between border-2 p-2 rounded-md">
          <i className="fa-solid fa-location-dot text-white"></i>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            type="text"
            className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-100"
            placeholder="Location"
          />
          <button type="submit" onClick={searchLocation}>
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
