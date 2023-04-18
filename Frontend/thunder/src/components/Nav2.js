import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import LoginIcon from "@mui/icons-material/Login";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const goToCart = () => {
  console.log("hello cart");
};

const NavigationBar = () => {
  return (
    <nav
      className="container-fluid nav justify-content-left navbar navbar-expand-md  bg-primary bg-gradient navbarscroll p-0 m-0"
      data-bs-theme="dark"
      style={{ border: "solid 3px green" }}
    >
      <div
        className="container-fluid d-flex pe-0"
        style={{ border: "solid 3px red" }}
      >
        {/* website logo */}
        <a className="navbar-brand ms-2 mr-0" href="/">
          Website
        </a>
        <button
          className="navbar-toggler ml-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* container for all links and search-bar */}
        <div
          className="collapse navbar-collapse justify-content-left"
          id="navbarSupportedContent"
          style={{ border: "solid 3px yellow" }}
        >
          <ul
            className="container-fluid navbar-nav p-0 m-0 d-flex align-self-center"
            style={{ border: "solid 3px black" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/">
                <HomeSharpIcon />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/trending">
                <TrendingUpIcon />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/?electronics">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/?videoGames">
                    Video games
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/?mostPopular">
                    most popular
                  </a>
                </li>
              </ul>
            </li>
            {/* start: search bar */}
            <li className="nav-item w-100">
              <div className="input-group w-100 p-0">
                <div className="form-outline d-flex col-12 col-sm-11 h-100 pt-2">
                  <input
                    type="search"
                    id="form1"
                    class="nav-input nav-progressive-attribute bg-dark w-100"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <button
                  id="search-button"
                  type="button"
                  className="btn btn-outline-* d-none d-sm-block col-sm-1"
                >
                  <SearchIcon />
                </button>
              </div>
            </li>
            {/* end: search bar */}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <ShoppingCartIcon />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <span className="d-none d-sm-inline">
                  <LoginIcon />
                </span>
                <span className="d-inline d-sm-none">
                  <LoginIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
