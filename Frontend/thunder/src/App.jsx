import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";
import { Routes, Route, Link } from "react-router-dom";
//_____________________________pages______________________________________
import HomePage from "./Page/HomePage";
import Product from "./Page/Product";
import LoginForm from "./Page/LoginForm";
import Log from "./Page/log";
//_____________________________components_____________________________
import Nav2 from "./components/Nav2";
import Card from "./components/Card";
import Slider2 from "./components/Slider2";
import SideBarTest from "./components/SideBarTest";

import LoginTest from "./Page/LoginTest";

function App() {
  return (
    <div
      className="App d-flex-column justify-content-center vh-100"
      style={{ border: "solid 3px red" }}
    >
      <Nav2 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginTest />} />
        <Route path="/product/id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

// nav2
//sideBarTest
//slider2
//card
