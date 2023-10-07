import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import InStockLogo from "../../assets/assets/logo/InStock-Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={"/"} className="header__logo-link">
          <img src={InStockLogo} alt="in-stock-logo" />
        </Link>
      </div>
      <nav className="nav">
        <NavLink to={"/warehouses"} className={"warehouse__link"}>
          Warehouses
        </NavLink>
        <NavLink to={"/inventories"} className={"inventories__link"}>
          Inventory
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
