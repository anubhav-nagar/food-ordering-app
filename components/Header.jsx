import React from "react";
import logo from "../images/logo-3.png"
import './header.css'

export default function Header() {
  return (
    <>
      <div id="header">
        <img src={logo} alt="logo" className="logo-img" />
        <ul className="nav-items">
          <li className="item">Search</li>
          <li className="item">Offers</li>
          <li className="item">Help</li>
          <li className="item">SignIn</li>
          <li className="item">Cart</li>
        </ul>
      </div>
    </>
  );
}
