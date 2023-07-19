import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          our customers <span>reviews</span>
        </h1>
        <div className="box-container">
          {data.map((curItem) => {
            return (
              <div className="box" key={curItem.id}>
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
                <p>{curItem.review}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ReviewCard;
