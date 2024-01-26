import React, { useState } from "react";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import menu from "./GalleryItem.js";

const Gallery = () => {
  const [menuData, setMenuData] = useState(menu);

  return (
    <>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          our food <span>gallery</span>{" "}
        </h1>
        <div className="box-container">
          {menuData.map((curElem) => {
            return <GalleryCard key={curElem.id} menuData={curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
