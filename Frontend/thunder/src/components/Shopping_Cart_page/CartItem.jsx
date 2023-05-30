import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = (props) => {
  return (
    <div
      className="d-flex justify-content-around p-1 m-1"
      style={{ border: "3px solid green" }}
    >
      <div className="align-self-center">
        <img
          className="img-fluid ps-0"
          style={{
            height: "100px",
            width: "100px",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          src="/Images/storm.jpg"
          alt="..."
        />
      </div>
      <div className="align-self-center">price: ${props.price}$</div>
      <div className="align-self-center">quantity: 1</div>
      <div className="d-flex justify-content-between align-self-center">
        <button type="button" class="btn btn-outline-success">
          <AddIcon />
        </button>
        <button type="button" class="btn btn-outline-danger">
          <RemoveIcon />
        </button>
      </div>
      <button className="align-self-center">
        <DeleteIcon fontSize="large" color="error" />
      </button>
    </div>
  );
};

export default CartItem;
