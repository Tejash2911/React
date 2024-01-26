import React from "react";

const GalleryCard = ({ menuData }) => {
  return (
    <div className="box">
      <img src={menuData.image} alt={menuData.name} />
      <div className="content">
        <h3>{menuData.name}</h3>
        <p>{menuData.description}</p>
        <a href="#" className="btn">
          order now
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;
