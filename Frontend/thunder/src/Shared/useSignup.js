import { redirect } from "react-router-dom";
import axios from "../API/axios";
import { useState, useEffect } from "react";

const useSignup = (Name, PhoneNumber, Email, Password, Submit) => {
  const signup = async () => {
    try {
      //let { name, email, password, phone, address } = req.body;
      console.log(Name, PhoneNumber, Email, Password);
      const response = await axios.post("/signup", {
        name: Name,
        email: Email,
        password: Password,
        phone: PhoneNumber,
      });

      if (response.status === 200) {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    if (Submit) {
      signup();
    }
  }, [Submit]);
};

export default useSignup;
