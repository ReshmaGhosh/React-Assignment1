import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" width="50px" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">Product</a>
          </li>
          <li>
            <a href="##">Favourite</a>
          </li>
          <li>
            <a href="##">Chat</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
