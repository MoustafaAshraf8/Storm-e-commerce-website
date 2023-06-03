import axios from "../API/axios";
import { useState, useEffect } from "react";
const useGetProducts = (setProducts) => {
  const getProducts = async () => {
    try {
      const response = await axios.get("/product");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
};

export default useGetProducts;
