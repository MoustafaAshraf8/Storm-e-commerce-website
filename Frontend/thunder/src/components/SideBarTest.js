import React from "react";

const SideBarTest = () => {
  return (
    <div
      className="pt-0 pb-0 d-none d-sm-block"
      data-bs-theme="dark"
      style={{ border: "solid 3px green", width: "150px" }}
    >
      {/* dropdown link */}

      <div>
        <a
          className="nav-link dropdown-toggle"
          role="button"
          href="#dropdown-menu-0"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="dropdown-menu-0"
        >
          collapse
        </a>
        <div className="dropdown-menu-0" id="dropdown-menu-0">
          <ul className="list-unstyled">
            <li className="d-flex">
              <a className="dropdown-item ms-0 me-0" href="#">
                link-0
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                link-1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                most
              </a>
            </li>
          </ul>
        </div>
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
      </div>
      <div className="nav-item dropdown">
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
      </div>
      {/* start: search bar */}
    </div>
  );
};

export default SideBarTest;
