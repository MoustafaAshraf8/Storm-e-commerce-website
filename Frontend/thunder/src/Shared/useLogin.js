import { redirect } from "react-router-dom";
import axios from "../API/axios";
import { useState, useEffect } from "react";
import { UserContextProvider, useUserContext } from "./useUserContext";

const useLogin = (Email, Password, Submit) => {
  let { User, setUser } = useUserContext();
  const login = async () => {
    try {
      //let { name, email, password, phone, address } = req.body;
      console.log("55555555555555555");
      console.log(Email, Password);
      let obj = {
        email: Email,
        password: Password,
      };
      //console.log(obj);
      const response = await axios.post("/login", obj);
      setUser(response.data[0]);
      for (let i = 0; i < 10; i++) {
        console.log(User);
      }
      //console.log(response.data[0]);

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
