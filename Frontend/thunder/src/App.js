import logo from "./logo.svg";
import "./App.css";
import "./Custom.css";
//_____________________________pages______________________________________
import HomePage from "./Page/HomePage";
import Product from "./Page/Product";
//_____________________________components_____________________________
import Nav2 from "./components/Nav2";
import Card from "./components/Card";
import Slider2 from "./components/Slider2";
import SideBarTest from "./components/SideBarTest";
import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginForm2";

function App() {
  return (
    <div
      className="App d-flex-column justify-content-center vh-100"
      style={{ border: "solid 3px red" }}
    >
      <Nav2 />
      <LoginForm2 />
    </div>
  );
}

export default App;

// nav2
//sideBarTest
//slider2
//card

<div className="d-flex justify-content-left">
  <SideBarTest />
  {/* <div>
          <Slider2 />
          <Card />
        </div> */}
  <Product />
</div>;
