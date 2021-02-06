import React from "react";

const Header = () => {
  return (
    <div className="container  mx-auto px-3 h-auto my-5">
      <nav className="nav-text lg:w-3/6">
        <ul className="flex flex-row justify-between items-center">
          <li>
            <a href="http://localhost:3000/">
              <img src="./assets/logo.svg" alt="logo" />
            </a>
          </li>
          <div className="container flex flex-row justify-between ml-10">
            <li>
              <a href="http://localhost:3000/">Home</a>{" "}
            </li>
            <li>
              <a href="http://localhost:3000/">About</a>{" "}
            </li>
            <li>
              <a href="http://localhost:3000/">Blog</a>{" "}
            </li>
            <li>
              <a href="http://localhost:3000/">Contact Us</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
