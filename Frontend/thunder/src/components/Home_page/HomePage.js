import React from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import {
  useUserContext,
  UserContextProvider,
} from "../../Shared/useUserContext";
const HomePage = () => {
  let { User, setUser } = useUserContext();
  for (let i = 0; i < 10; i++) {
    console.log(User);
  }
  return (
    <div>
      <Carousel />
      <Card />
    </div>
  );
};

export default HomePage;
