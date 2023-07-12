import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      <section className="speciality" id="speciality">
        <h1 className="heading">
          our <span>speciality</span>
        </h1>
        <div className="box-container">
          {menuData.map((curElem) => {
            return (
              <div className="box" key={curElem.id}>
                <img
                  className="image"
                  src={curElem.image2}
                  alt={curElem.name}
                />
                <div className="content">
                  <img src={curElem.image} alt={curElem.name} />
                  <h3>{curElem.name}</h3>
                  <p>{curElem.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuCard;
