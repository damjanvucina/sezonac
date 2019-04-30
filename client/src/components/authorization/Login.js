import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import axios from "axios";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";

import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/naslovnica");
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/naslovnica");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const employer = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(employer);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container-fluid text-center">
        <form noValidate className="form-signin" onSubmit={this.onSubmit}>
          <div className="display-4">Prijava</div>
          <br />

          <p className="mb-4 lead">
            Prijavite se kako bi mogli stvarati nove oglase.
          </p>

          <TextFieldGroup
            type="email"
            id="email"
            name="email"
            error={errors.email}
            placeholder="Email adresa"
            value={this.state.email}
            onChange={this.onChange}
            label="Email adresa"
            defaultClasses="form-control rounded-top"
          />

          <TextFieldGroup
            type="password"
            id="password"
            name="password"
            error={errors.password}
            placeholder="Šifra"
            value={this.state.password}
            onChange={this.onChange}
            label="Šifra"
            defaultClasses="form-control rounded-bottom"
          />

          <br />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Prijavi se
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
