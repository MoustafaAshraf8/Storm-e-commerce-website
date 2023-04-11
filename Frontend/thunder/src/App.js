import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Nav2 from "./components/Nav2";
import CategoriesBar from "./components/CategoriesBar";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Slider2 from "./components/Slider2";
import Sidebar from "./components/Sidebar";
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
      <div className="d-flex justify-content-center">
        <SideBarTest />
        <div>
          <Slider2 />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
