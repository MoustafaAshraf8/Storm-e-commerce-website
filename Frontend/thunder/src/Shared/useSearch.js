import axios from "../API/axios";
import { useState, useEffect } from "react";
const useSearch = (name) => {
  const getProduct = async () => {
    try {
      const response = await axios.get(`/product?name=${name}`);
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getProduct();
  });
};

export default useSearch;
