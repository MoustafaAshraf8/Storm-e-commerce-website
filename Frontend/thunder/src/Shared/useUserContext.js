import { createContext, useContext, useState } from "react";

let UserContext = createContext({
  ClientID: "",
  Name: "",
  Email: "",
  Phone: "",
  Address: "",
});

export let UserContextProvider = ({ children }) => {
  let [User, setUser] = useState({
    ClientID: "",
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export let useUserContext = () => useContext(UserContext);
