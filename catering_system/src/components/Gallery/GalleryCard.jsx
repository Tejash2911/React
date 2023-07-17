import React from "react";

const GalleryCard = ({ menuData }) => {
  return (
    <>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          our food <span>gallery</span>{" "}
        </h1>
        <div className="box-container">
          {menuData.map((curItem) => {
            return (
              <div className="box" key={curItem.id}>
                <img src={curItem.image} alt={curItem.name} />
                <div className="content">
                  <h3>{curItem.name}</h3>
                  <p>{curItem.description}</p>
                  <a href="#" className="btn">
                    order now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default GalleryCard;
