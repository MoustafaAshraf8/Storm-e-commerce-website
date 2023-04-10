import React from "react";

let items = [
  "item-0",
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5",
  "item-6",
  "item-7",
];

const Card2 = () => {
  return (
    <div className=" d-flex justify-content-left flex-wrap row justify-content-md-center">
      {items.map((item) => {
        return (
          <div className="card col-sm-12 col-md-6 col-lg-3">
            <img
              src="https://placebeard.it/640x360"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">{item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
