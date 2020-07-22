import React from "react";
import "./style.css";
import { signOutUser } from "../Auth/AuthApi";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        {props.logo}
      </a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/about">
          {props.about}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
          {props.login}
          </a>
        </li>
        <li className="nav-item" onClick={ signOutUser }>
          <a className="nav-link" href="/">
          {props.logout}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
