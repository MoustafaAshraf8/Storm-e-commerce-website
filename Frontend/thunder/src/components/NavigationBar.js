import React from "react";

const goToCart = () => {
  console.log("hello cart");
};

const NavigationBar = () => {
  return (
    <nav
      className="nav justify-content-center navbar navbar-expand-md  bg-primary bg-gradient navbarscroll"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          {/* me:margin end, mb:margin bottom */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <a className="nav-link active" href="#">
                Website
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cart">
                Cart
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
                  <a className="dropdown-item" href="#">
                    link-0
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    link-1
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    most popular
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                test link
              </a>
            </li>
          </ul>
          {/* search bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="button" href="cart">
              Cart
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
