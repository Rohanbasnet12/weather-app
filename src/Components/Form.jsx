import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="input-box flex gap-2 items-center justify-between border-2 p-2 rounded-md">
          <i className="fa-solid fa-location-dot text-white"></i>
          <input
            type="text"
            className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-100"
            placeholder="Location"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
