import React from "react";
import { Link } from "react-router-dom";
import logo from "./../books-logo.svg";
import cart from "./../cart.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" className="header-img" />
            <p className="header-title">Bookman</p>
          </Link>
          <Link to="/cart"><img alt="cart" className="header-cart" src={cart} /></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
