import React from "react";
import "./Order.css";
import Steps from "../Steps/Steps";

const Order = () => {
  const stepData = [
    {
      id: 1,
      name: "choose your favourite food",
      image: "images/step-food.png",
    },
    {
      id: 2,
      name: "free and fast delivery",
      image: "images/step-delivery.avif",
    },
    {
      id: 3,
      name: "easy payment methods",
      image: "images/step-payment.png",
    },
    {
      id: 4,
      name: "and finally enhoy your food",
      image: "images/step-enjoy.jpg",
    },
  ];

  return (
    <>
      <section className="order" id="order">
        <h1 className="heading">
          <span>order</span> now
        </h1>
        <div className="row">
          <div className="image">
            <img src="images/order-img.jpg" alt="" />
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>

            <div className="input-box">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="food name" />
            </div>

            <textarea placeholder="address" name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="order now" className="btn" onClick={(e) => e.preventDefault()} />
          </form>
        </div>
      </section>
      <div className="steps" id="steps">
        {stepData.map((curElem) => {
          return <Steps key={curElem.id} data={curElem} />;
        })}
      </div>
    </>
  );
};

export default Order;
