import React, { useState } from "react";
import "./Review.css";
import reviewData from "./data";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [data, setData] = useState(reviewData);
  return (
    <>
      <ReviewCard data={data} />
    </>
  );
};

export default Review;
