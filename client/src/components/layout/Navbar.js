import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import "./Navbar.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();

    this.props.logoutUser();
  }

  onPublishAdClick(e) {
    e.preventDefault();

    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/registracija");
    } else {
      this.props.history.push("/objava-oglasa");
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const loggedLinks = (
      <Link
        className="navbar-link p-2 text-dark"
        onClick={this.onLogoutClick.bind(this)}
        to={"/"}
      >
        Odjava
      </Link>
    );

    const guestLinks = (
      <span>
        <Link className="navbar-link p-2 text-dark " to="/prijava">
          Prijava
        </Link>
        <Link className="navbar-link p-2 text-dark" to="/registracija">
          Registracija
        </Link>
      </span>
    );
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal display-6">
          <Link className="navbar-link" to="/">
            Sezonac
          </Link>
        </h5>
        {isAuthenticated ? (
          <span className="pr-3 text-muted">{this.props.auth.user.name}</span>
        ) : null}

        <nav className="my-2 my-md-0 mr-md-3">
          {isAuthenticated ? loggedLinks : guestLinks}
          <Link
            className="navbar-link p-2 text-dark"
            onClick={this.onPublishAdClick.bind(this)}
            to={"/objava-oglasa"}
          >
            Predaja oglasa
          </Link>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
