import React, { useState } from "react";

const ColorInput = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "100px",
          width: "100px",
          border: "1px solid gray",
          margin: "10px auto",
        }}
      ></div>
      <input
        type="text"
        placeholder="Enter Color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </>
  );
};

export default ColorInput;
