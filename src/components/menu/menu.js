import React from "react";
import "./menu.css";

const menu = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <p>Fress</p>
        </div>
        <ul>
          <li>
            <a href="">Become a cook</a>
          </li>
          <li>
            <a href="">Join as Foodie</a>
          </li>
          <li>
            <p>Login</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default menu;
