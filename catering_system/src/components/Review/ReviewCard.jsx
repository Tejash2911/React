import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  return (
    <div className="box">
      <img src={data.image} alt="" />
      <h3>{data.name}</h3>
      <div className="stars">
        <i>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </i>
      </div>
      <p>{data.review}</p>
    </div>
  );
};

export default ReviewCard;
