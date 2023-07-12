import React from "react";
import "./Home.css";
import HomeImg from "../../assets/images/home-img.png";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="content">
          <h3>food made with love</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad culpa
            labore aliquam pariatur est ducimus numquam fuga, temporibus nisi
            excepturi tempore voluptas nobis laborum cupiditate, eveniet
            sapiente, in eaque reprehenderit.
          </p>
          <a href="#" className="btn">
            order now
          </a>
        </div>
        <div className="image">
          <img src={HomeImg} alt="Home Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
