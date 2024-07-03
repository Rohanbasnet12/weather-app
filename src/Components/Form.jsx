import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="input-box flex gap-2 items-center justify-between border p-2 rounded-md">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            className="w-full bg-transparent outline-none text-black placeholder-zinc-900"
            placeholder="Location"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
