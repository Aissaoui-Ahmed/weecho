import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav justify-content-between" id="nav">
      <h5 className="nav-link h-brand">Weecho</h5>
      <div className="d-flex">
        <NavLink activeClassName="selected" className="nav-link" to="/docs">Docs</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/price">Pricing</NavLink>
      </div>
      <a className="nav-link log-in" href="/sign-in">LOGIN</a>
    </nav>
  )
}
export default Nav;