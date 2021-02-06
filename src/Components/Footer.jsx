import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-full py-10">
      <div className="md:container md:mx-auto">
        <nav className="nav-text lg:w-3/6">
          <ul className="flex flex-row justify-between items-center text-white  ">
            <li>
              <img src="./assets/logo-light.svg" alt="logo" />
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
    </footer>
  );
};

export default Footer;
