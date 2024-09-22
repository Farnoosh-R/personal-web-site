import React from "react";
import "./style.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary p-4">
  <Link className="navbar-brand" href="#">My website</Link>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/aboutus">About us</Link>
      </li>
      <li className="nav-item dropdown">
      <Link className="nav-link" to="/contactus">Contact us</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}
export default Navbar;