import React from "react";
import logo from "../images/logo-3.png";
// import "./header.css";
import {Link} from 'react-router-dom';
import useOnline from "../utils/useOnline";

export default function Header() {
  return (
    <>
    <div className="">
      <div className="flex justify-between h-20 mx-32">
        <img src={logo} alt="logo" className="w-362 h-32 z-50 " />
        <div className="mr-12 mt-7 text-sm shadow-slate-950">
          <ul className="flex">
            <Link to='/' className=""> 
            <li className="mr-8">Home</li>
            </Link>
            <Link to='/about' className="">
            <li className="mr-8">About</li>
            </Link>
            <Link to='/contact' className="">
            <li className="mr-8">Contact</li>
            </Link>
            <li className="item">Cart &nbsp;&nbsp;&nbsp; {useOnline()?"🟢":"🔴"}</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

