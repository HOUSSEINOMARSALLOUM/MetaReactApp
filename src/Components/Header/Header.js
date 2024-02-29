import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Add your header content here */}
      <h1>Little Lemon</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {/* Add other navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
