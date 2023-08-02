import React, { useState } from "react";

const ShowHide = () => {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("red");
  return (
    <>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      <button
        onClick={() => {
          setTextColor(textColor === "red" ? "green" : "red");
        }}
      >
        {textColor === "red" ? "green" : "red"}
      </button>
      {showText === true && <h1 style={{ color: textColor }}>Hello World</h1>}
    </>
  );
};

export default ShowHide;
