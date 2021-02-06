import React from "react";

const Header = () => {
  return (
    <div className="container  mx-auto px-3 h-auto my-5">
      <nav className="nav-text lg:w-3/6">
        <ul className="flex flex-row justify-between items-center">
          <li>
            <a href="http://iminn-demo.surge.sh/">
              <img src="./assets/logo.svg" alt="logo" />
            </a>
          </li>
          <div className="container flex flex-row justify-between ml-10">
            <li>
              <a href="http://iminn-demo.surge.sh/">Home</a>{" "}
            </li>
            <li>
              <a href="http://iminn-demo.surge.sh/">About</a>{" "}
            </li>
            <li>
              <a href="http://iminn-demo.surge.sh/">Blog</a>{" "}
            </li>
            <li>
              <a href="http://iminn-demo.surge.sh/">Contact Us</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
