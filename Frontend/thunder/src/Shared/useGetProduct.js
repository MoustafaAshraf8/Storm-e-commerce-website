import axios from "../API/axios";
import { useState, useEffect } from "react";
const useGetProduct = (id, setProduct) => {
  const getProduct = async () => {
    try {
      const response = await axios.get(`/product/${id}`);
      if (response.status === 200) {
        console.log(response.data);
        setProduct(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
};

export default useGetProduct;
