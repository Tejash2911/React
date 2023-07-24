import React from "react";
import Planets from "./Planets.js";

const Map = () => {
  return (
    <>
      {Planets.map(
        (planet, index) =>
          planet.isGasPlanet && <h1 key={index}>{planet.name}</h1>
      )}
    </>
  );
};

export default Map;
