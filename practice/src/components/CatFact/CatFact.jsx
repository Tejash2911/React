import React, { useState } from "react";

const CatFact = () => {
  const [catfact, setCatFact] = useState("");

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatFact(data.fact);
      });
  };

  return (
    <>
      <div className="cat">
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catfact}</p>
      </div>
    </>
  );
};

export default CatFact;
