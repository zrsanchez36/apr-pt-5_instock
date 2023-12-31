import React from "react";
import InStockLogo from "../../assets/assets/logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={"/"} className="header__logo-link">
          <img src={InStockLogo} alt="in-stock-logo" />
        </Link>
      </div>
      <nav className="nav">
        <NavLink to={"/warehouses"} className={"nav__link"}>
          Warehouses
        </NavLink>
        <NavLink to={"/inventory"} className={"nav__link"}>
          Inventory
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
