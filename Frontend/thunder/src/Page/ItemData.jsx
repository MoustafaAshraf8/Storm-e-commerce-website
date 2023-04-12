import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const ItemData = (props) => {
  return (
    <div>
      <div className="itemName d-flex justify-content-between mb-3">
        <span className="d-block col-3" style={{ textAlign: "left" }}>
          Name:
        </span>
        <span className="d-block">{props.name}</span>
      </div>
      {/*  */}
      <div className="itemPrice d-flex justify-content-start mb-3">
        <span className="d-block col-3" style={{ textAlign: "left" }}>
          Price:{" "}
        </span>
        <span className="d-block">{props.price}</span>
      </div>
      {/*  */}
      <div className="itemQuantity d-flex justify-content-start mb-3">
        <span className="d-block col-3" style={{ textAlign: "left" }}>
          Quantity: {props.quantity}
        </span>
      </div>
      {/*  */}
      <div className="d-grid gap-2 mb-2">
        <button
          className="btn btn-primary"
          type="button"
          style={{ backgroundColor: "rgb(0,128,0)", border: "none" }}
        >
          <span className="d-none d-md-inline">Add to cart</span>
          <span className="d-inline d-md-none">
            <AddShoppingCartIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ItemData;
