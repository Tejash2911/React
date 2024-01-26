import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="box">
        <img className="image" src={menuData.image2} alt={menuData.name} />
        <div className="content">
          <img src={menuData.image} alt={menuData.name} />
          <h3>{menuData.name}</h3>
          <p>{menuData.desc}</p>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
