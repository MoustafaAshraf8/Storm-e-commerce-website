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
  "item-0",
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5",
  "item-6",
  "item-7",
];

const Card = () => {
  return (
    <div className=" d-flex row justify-content-center w-100 m-0">
      {items.map((item) => {
        return (
          <div className="card col-12 col-sm-6 col-md-3 p-1">
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

export default Card;
