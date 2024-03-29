import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <HashLink to={"/#home"}>
        <h1>TechyAbhay</h1>
      </HashLink>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/Contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
