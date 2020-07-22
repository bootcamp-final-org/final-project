import React from "react";
import "./style.css";
import logo from "../Home/assets/logo.svg";
import { Navbar } from 'react-bootstrap';

function Nav(props) {
  return (

  <nav className="navbar navbar-expand-lg justify-content-between">
    <a className="navbar-brand" href="/">
   <img src={logo} alt="Logo" />
     </a>

     <ul className="nav justify-content-end">
   <li className="nav-item">
     <a className="nav-link" href="/login">
     {props.login}
     </a>
   </li>
     </ul>
   </nav>  
  );
}

export default Nav;
