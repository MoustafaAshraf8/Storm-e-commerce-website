import React from "react";

const CardData = (props) => {
  console.log("a7a");
  return (
    <div className="card border-0 col-12 col-sm-6 col-md-3 p-3 m-0">
      <img
        src="https://placebeard.it/640x360"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
      <div className="d-flex justify-content-between p-0">
        <div>
          <div className="align-items-start">Price: {props.price}$</div>
        </div>
        <div>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star checked"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star-half-o"
            style={{ color: "orange" }}
          ></span>
          <span
            className="fa fa-star-half-o"
            style={{ color: "orange" }}
          ></span>
        </div>
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export default CardData;
