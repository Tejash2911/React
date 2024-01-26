import React, { useState } from "react";
import "./Popular.css";
import PopularCard from "./PopularCard";
import Menu from "./PopularItem.js";

const Popular = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <section className="popular" id="popular">
        <h1 className="heading">
          most <span>popular</span> foods
        </h1>
        <div className="box-container">
          {menuData.map((curElem) => {
            return <PopularCard key={curElem.id} menuData={curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Popular;
