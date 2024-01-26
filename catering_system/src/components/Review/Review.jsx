import React, { useState } from "react";
import "./Review.css";
import reviewData from "./data";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [data, setData] = useState(reviewData);
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          our customers <span>reviews</span>
        </h1>
        <div className="box-container">
          {data.map((curElem) => {
            return <ReviewCard key={curElem.id} data={curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Review;
