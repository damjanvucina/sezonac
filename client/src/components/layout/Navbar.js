import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal display-6">
          <Link className="navbar-link" to="/">
            Sezonac
          </Link>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="navbar-link p-2 text-dark " to="/prijava">
            Prijava
          </Link>
          <Link className="navbar-link p-2 text-dark" to="/registracija">
            Registracija
          </Link>
          <Link className="navbar-link p-2 text-dark" to="/oglasi/novi">
            Predaja oglasa
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
