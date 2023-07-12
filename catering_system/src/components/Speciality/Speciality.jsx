import React, { useState } from "react";
import Menu from "./SpecialityItem.js";
import MenuCard from "./MenuCard.jsx";
import "./Speciality.css";

const Speciality = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Speciality;
