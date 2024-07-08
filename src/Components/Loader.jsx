import React from "react";

const Loader = () => {
  const loaderStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    position: "relative",
    animation: "rotate 1s linear infinite",
  };

  const loaderBeforeStyle = {
    content: '""',
    boxSizing: "border-box",
    position: "absolute",
    inset: "0px",
    borderRadius: "50%",
    border: "5px solid #FFF",
    animation: "prixClipFix 2s linear infinite",
  };

  const rotateKeyframes = `
    @keyframes rotate {
      100% { transform: rotate(360deg); }
    }
  `;

  const prixClipFixKeyframes = `
    @keyframes prixClipFix {
      0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
      25% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
      50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
      75% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%); }
      100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0); }
    }
  `;

  return (
    <div>
      <style>
        {rotateKeyframes}
        {prixClipFixKeyframes}
      </style>
      <div style={loaderStyle} className="loader m-auto pb-4">
        <div style={loaderBeforeStyle}></div>
      </div>
    </div>
  );
};

export default Loader;
