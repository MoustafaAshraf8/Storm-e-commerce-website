import React from "react";
import ProductCarousel from "./ProductCarousel";
import ItemData from "./ItemData";
import { useState } from "react";
import useGetProduct from "../Shared/useGetProduct";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const [Product, setProduct] = useState({});
  const productid = useParams().id;
  useGetProduct(productid, setProduct);
  console.log(Product);

  return (
    <div
      className="container-fluid d-flex-column justify-content-center"
      style={{ border: "solid 3px blue", height: "100%", position: "fixed" }}
    >
      <div
        className="topContainer d-flex row justify-content-between p-2"
        style={{ border: "solid 3px green", maxHeight: "75%" }}
      >
        <div
          className="imgContainer col-12 col-md-4 ps-0"
          style={{ border: "3px solid green" }}
        >
          {/* <ProductCarousel /> */}
          <img
            className="img-fluid ps-0"
            style={{
              height: "300px",
              width: "300px",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            src="/Images/storm.jpg"
            alt="..."
          />
        </div>
        <div className="infoContainer col-12 col-md-4 align-self-center">
          <ItemData name={Product.name} price="100" quantity="15" />
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
