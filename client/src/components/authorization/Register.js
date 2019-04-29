import React, { Component } from "react";
import "./Authorization.css";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newEmployer = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newEmployer, this.props.history);
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
      nextProps.history.push("/naslovnica");
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container-fluid text-center">
        <form noValidate className="form-signin" onSubmit={this.onSubmit}>
          <div className="display-4">Registracija</div>
          <br />

          <p className="mb-4 lead">
            Želite pronaći kvalitetne sezonce? Registrirajte se kako bi mogli
            objavljivati oglase.
          </p>

          <label htmlFor="name" className="sr-only">
            Ime poslodavca
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // className="form-control"
            className={classnames("form-control rounded-top", {
              "is-invalid": errors.name
            })}
            placeholder="Ime poslodavca"
            value={this.state.name}
            onChange={this.onChange}
            autoFocus
          />
          {errors.name && (
            <div className="invalid-feedback auth-warning">{errors.name}</div>
          )}
          <label htmlFor="email" className="sr-only">
            Email adresa
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={classnames("form-control rounded-0", {
              "is-invalid": errors.email
            })}
            placeholder="Email adresa"
            value={this.state.email}
            onChange={this.onChange}
            autoFocus
          />
          {errors.email && (
            <span className="invalid-feedback auth-warning">
              {errors.email}
            </span>
          )}
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={classnames("form-control rounded-0", {
              "is-invalid": errors.password
            })}
            placeholder="Šifra"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <div className="invalid-feedback auth-warning">
              {errors.password}
            </div>
          )}

          <label htmlFor="password2" className="sr-only">
            Potvrdi šifru
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className={classnames("form-control rounded-bottom", {
              "is-invalid": errors.password2
            })}
            placeholder="Potvrdi šifru"
            value={this.state.password2}
            onChange={this.onChange}
          />
          {errors.password2 && (
            <div className="invalid-feedback auth-warning">
              {errors.password2}
            </div>
          )}
          <br />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Registriraj se
          </button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
