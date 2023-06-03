import { redirect } from "react-router-dom";
import axios from "../API/axios";
import { useState, useEffect } from "react";

const useLogin = (Email, Password, Submit) => {
  const login = async () => {
    try {
      //let { name, email, password, phone, address } = req.body;
      console.log("55555555555555555");
      console.log(Email, Password);
      let obj = {
        email: Email,
        password: Password,
      };
      console.log(obj);
      const response = await axios.post("/login", obj);

      if (response.status === 200) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (Submit) {
      login();
    }
  }, [Submit]);
};

export default useLogin;
