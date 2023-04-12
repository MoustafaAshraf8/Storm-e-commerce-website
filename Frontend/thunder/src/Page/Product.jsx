import React from "react";
import ProductCarousel from "./ProductCarousel";
import ItemData from "./ItemData";
const Product = (props) => {
  return (
    <div
      className="container-fluid d-flex-column justify-content-center"
      style={{ border: "solid 3px blue", height: "100%", position: "fixed" }}
    >
      <div
        className="topContainer d-flex justify-content-between p-2"
        style={{ border: "solid 3px green", maxHeight: "75%" }}
      >
        <div className="imgContainer col-8 ps-0">
          {/* <ProductCarousel /> */}
          <img
            className="img-fluid ps-0"
            style={{ height: "100%", maxWidth: "75%" }}
            src="./Images/storm.jpg"
            alt="..."
          />
        </div>
        <div className="infoContainer col-4">
          <ItemData />
        </div>
      </div>
      <div style={{ textAlign: "start" }}>
        <div>
          <u>Description</u>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          pariatur earum totam fugiat beatae cumque quae provident laudantium
          eaque, voluptate nostrum illum quisquam in debitis? Tempore
          consequuntur, repudiandae officiis consectetur excepturi nihil enim
          commodi labore iste cupiditate repellat sit, doloremque eos quae dicta
          non soluta molestiae odio expedita. Reprehenderit rem, iste ipsum
          saepe vitae dolor ab asperiores voluptatem veniam commodi consequatur
          quo temporibus quia nulla fugit eius impedit inventore veritatis natus
          accusamus, error nesciunt soluta. Quaerat commodi consequatur
          molestiae placeat asperiores aliquam dolor libero delectus a ducimus
          sint alias tempora, enim deserunt. Accusamus ipsum, nulla eaque eius
          laborum voluptates illo.
        </div>
      </div>
    </div>
  );
};

export default Product;

<img
  src="https://placebeard.it/640x360"
  style={{ height: "100px", width: "100px" }}
/>;
