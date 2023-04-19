import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/owner">Owner</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
