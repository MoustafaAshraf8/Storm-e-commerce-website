import logo from "./logo.svg";
import "./App.css";
//_____________________________pages______________________________________
import HomePage from "./Page/HomePage";
import Product from "./Page/Product";
//_____________________________components_____________________________
import Nav2 from "./components/Nav2";
import Card from "./components/Card";
import Slider2 from "./components/Slider2";
import SideBarTest from "./components/SideBarTest";

function App() {
  return (
    <div className="App">
      <Nav2 />
      {/* <Sidebar /> */}
      {/* <CategoriesBar /> */}
      {/* <Nav2 /> */}
      {/* <Slider2 />
      <Card /> */}
      <div className="d-flex justify-content-left">
        <SideBarTest />
        {/* <div>
          <Slider2 />
          <Card />
        </div> */}
        <Product />
      </div>
      ;
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
