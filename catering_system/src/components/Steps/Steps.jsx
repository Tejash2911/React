import React from "react";
import "./Steps.css";

const Steps = ({ data }) => {
  return (
    <div className="box">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
};

export default Steps;
