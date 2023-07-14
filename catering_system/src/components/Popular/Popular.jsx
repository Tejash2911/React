import React, { useState } from "react";
import "./Popular.css";
import PopularCard from "./PopularCard";
import Menu from "./PopularItem.js";

const Popular = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <PopularCard menuData={menuData} />
    </>
  );
};

export default Popular;
