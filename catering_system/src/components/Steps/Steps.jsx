import React from "react";
import "./Steps.css";

const Steps = ({ stepData }) => {
  return (
    <>
      <div className="steps" id="steps">
        {stepData.map((curItem) => {
          return (
            <div className="box" key={curItem.id}>
              <img src={curItem.image} alt={curItem.name} />
              <h3>{curItem.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Steps;
