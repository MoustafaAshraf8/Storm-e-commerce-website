import React from "react";
import CardData from "./CardData";
let items = [
  {
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500000",
    rating: "4.5",
  },
  {
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "500000",
    rating: "4.5",
  },
  {
    name: "item-0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
  {
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",
  },
];

const Card = () => {
  return (
    <div className=" d-flex row justify-content-center w-100 m-0 p-0">
      {items.map((item) => (
        <CardData
          name={item.name}
          description={item.description}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Card;
