import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const categories = [
  "Today deals",
  "electronics",
  "phones",
  "tablets",
  "video games",
  "home",
  "gym tools",
  "car equipments",
];

const map1 = new Map();

map1.set("home", "home");
map1.set("Today deals", "topDeals");
map1.set("electronics", "electronics");
map1.set("phones", "phones");
map1.set("tablets", "tablets");
map1.set("video games", "videoGames");
map1.set("gym tools", "gymTools");
map1.set("car equipments", "carEquipments");
const CategoriesBar = () => {
  return (
    <div>
      <ul className="nav bg-light d-none d-md-inline">
        <li
          style={{
            padding: "0px 10px 2px 0px",
            margin: "0px 10px 0px 0px",
          }}
        >
          <DropdownButton id="dropdown-basic-button b-danger" title="All">
            {categories.map((categ) => {
              return (
                <Dropdown.Item href={map1.get(categ)}>{categ}</Dropdown.Item>
              );
            })}
          </DropdownButton>
        </li>
        {/*  */}

        {categories.map((categ) => {
          return (
            <li
              style={{
                padding: "0px 10px 2px 0px",
                margin: "0px 10px 0px 0px",
              }}
            >
              <a href={map1.get(categ)} style={{ textDecoration: "none" }}>
                {categ}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesBar;
{
  /* <li
          className="dropdown"
          style={{
            padding: "0px 10px 2px 0px",
            margin: "0px 10px 0px 0px",
            position: "relative",
          }}
        >
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </li> */
}
