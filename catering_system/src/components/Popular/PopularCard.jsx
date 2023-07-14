import React from "react";
import { FaStar } from "react-icons/fa";

const PopularCard = ({ menuData }) => {
  return (
    <section class="popular" id="popular">
      <h1 class="heading">
        most <span>popular</span> foods
      </h1>
      <div class="box-container">
        {menuData.map((curItem) => {
          return (
            <div class="box">
              <span class="price">{curItem.price}</span>
              <img src={curItem.image} alt="" />
              <h3>{curItem.name}</h3>
              <div class="stars">
                <i>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </i>
              </div>
              <a href="#" class="btn">
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
