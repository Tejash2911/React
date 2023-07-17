import React, { useState } from "react";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import menu from "./GalleryItem.js";

const Gallery = () => {
  const [menuData, setMenuData] = useState(menu);

  return <GalleryCard menuData={menuData} />;
};

export default Gallery;
