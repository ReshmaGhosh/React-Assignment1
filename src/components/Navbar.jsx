import React from "react";

export default function Navbar() {
  return (
    <nav class="nav">
      <div class="nav-logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div class="nav-item">
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
      <div class="text">
        <h1>Sale 20% Off</h1>
        <h3>On Everything</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sed
          <br></br>
          corporis distinctio provident non accusamus quidem iusto at quaerat
          sint?
        </p>
        <button>Shop Now</button>
      </div>
    </nav>
  );
}
