import React from "react";

const PopularCard = () => {
  return (
    <section class="popular" id="popular">
      <h1 class="heading">
        most <span>popular</span> foods
      </h1>
      <div class="box-container">
        <div class="box">
          <span class="price">$5 - $20</span>
          <img src="images/sp-img-1.jpg" alt="" />
          <h3>tasty burger</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="#" class="btn">
            order now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCard;
