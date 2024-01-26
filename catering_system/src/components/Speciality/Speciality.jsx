import React, { useState } from "react";
import Menu from "./SpecialityItem.js";
import MenuCard from "./MenuCard.jsx";
import "./Speciality.css";

const Speciality = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <section className="speciality" id="speciality">
        <h1 className="heading">
          our <span>speciality</span>
        </h1>
        <div className="box-container">
          {menuData.map((curElem) => {
            return <MenuCard key={curElem.id} menuData={curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Speciality;
