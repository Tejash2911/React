import React from "react";
import { FaStar } from "react-icons/fa";

const PopularCard = ({ menuData }) => {
  return (
    <div className="box">
      <span className="price">{menuData.price}</span>
      <img src={menuData.image} alt="" />
      <h3>{menuData.name}</h3>
      <div className="stars">
        <i>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </i>
      </div>
      <a href="#" className="btn">
        order now
      </a>
    </div>
  );
};

export default PopularCard;
