import React from "react";

const ReviewCard = () => {
  return (
    <>
      <section class="review" id="review">
        <h1 class="heading">
          our customers <span>reviews</span>
        </h1>
        <div class="box-container">
          <div class="box">
            <img src="images/user1.jfif" alt="" />
            <h3>user 1</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              repellendus ipsa eum, omnis ducimus quasi quae facilis sed
              praesentium animi?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewCard;
