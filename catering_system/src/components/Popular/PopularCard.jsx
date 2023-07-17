import React from "react";
import { FaStar } from "react-icons/fa";

const PopularCard = ({ menuData }) => {
  return (
    <section className="popular" id="popular">
      <h1 className="heading">
        most <span>popular</span> foods
      </h1>
      <div className="box-container">
        {menuData.map((curItem) => {
          return (
            <div className="box" key={curItem.id}>
              <span className="price">{curItem.price}</span>
              <img src={curItem.image} alt="" />
              <h3>{curItem.name}</h3>
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
        })}
      </div>
    </section>
  );
};

export default PopularCard;
