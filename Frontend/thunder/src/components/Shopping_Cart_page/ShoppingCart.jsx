import React from "react";
import CartItem from "./CartItem";

let items = [
  {
    id: 0,
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500",
    rating: "4.5",
    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 0,
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/610pghkO81L._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "item-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "20",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "30",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/610pghkO81L._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "5",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "89",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "70",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "80",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 0,
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500000",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 0,
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "23",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "item-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "580",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "102",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "300",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "400",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "605",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "702",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
];

const ShoppingCart = () => {
  return (
    <div className="d-flex justify-content-start p-5">
      <div className="container-fluid">
        {items.map((item) => (
          <CartItem
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            imgURL={item.imgURL}
          />
        ))}
      </div>
      <div className="ms-5">
        <div>
          <h1>
            <b>Totale price</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
