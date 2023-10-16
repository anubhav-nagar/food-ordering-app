import React from "react";
import logo from "../images/logo-3.png";
import "./header.css";
import SearchBar from "./SearchBar";

export default function Header({ ...props }) {
  return (
    <>
      <div id="header">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="nav">
          <SearchBar filterList={props.filterList} setList={props.setList} />
          <ul className="nav-items">
            <li className="item">Offers</li>
            <li className="item">Help</li>
            <li className="item">SignIn</li>
            <li className="item">Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}
