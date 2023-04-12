import React from "react";
import CardData from "./CardData";
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
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/610pghkO81L._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
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
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "item-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "item-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "item-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "item-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "item-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "item-7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit quos ad doloribus dolores nisi",
    price: "100",
    rating: "4.5",

    imgURL: "https://m.media-amazon.com/images/I/716sPBem8TL._AC_SL1500_.jpg",
  },
];

const Card = () => {
  return (
    <div className=" d-flex row justify-content-center w-100 m-0 p-0">
      {items.map((item) => (
        <CardData
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          rating={item.rating}
          imgURL={item.imgURL}
        />
      ))}
    </div>
  );
};

export default Card;
