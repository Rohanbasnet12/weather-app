import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="input-box">
          <i className="fa-solid fa-location-pin"></i>
          <input type="text" />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
