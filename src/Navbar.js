import React from "react";
import logo from "./assets/mclogo1.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-white">
      <a className="navbar-brand text-success" href="#">
        <img src={logo} style={{ width: 170 }} />
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active ">
            <a className="nav-link text-dark font-weight-bold" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark font-weight-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
