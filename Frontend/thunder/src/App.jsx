import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";
import { Routes, Route, Link } from "react-router-dom";
//_____________________________pages______________________________________
import Product from "./Page/Product";

//_____________________________components_____________________________
import Card from "./components/Home_page/Card";
import Carousel from "./components/Home_page/Carousel";
import SideBarTest from "./components/SideBarTest";

//__________________________final pages_______________________________

import NavigationBar from "./components/Navigation_Bar/NavigationBar";
import HomePage from "./components/Home_page/HomePage";
import LogInPage from "./components/LogIn_page/LogInPage";
import SignUp_page from "./components/SignUp_page/SignUp_page";
import ShoppingCart from "./components/Shopping_Cart_page/ShoppingCart";

function App() {
  return (
    <div
      className="App d-flex-column justify-content-center vh-100"
      style={{ border: "solid 3px red" }}
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp_page />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;

// nav2
//sideBarTest
//slider2
//card
