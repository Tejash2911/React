import React, { useState } from "react";

const InputChange = () => {
  const [inputValue, setInputValue] = useState("❤");

  const handleinputchange = (e) => {
    let newText = e.target.value.toUpperCase();
    setInputValue(newText);
  };
  return (
    <>
      <input type="text" onChange={(e) => handleinputchange(e)} />
      <h1>{inputValue}</h1>
    </>
  );
};

export default InputChange;
