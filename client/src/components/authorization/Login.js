import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

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

  onSubmit(e) {
    e.preventDefault();

    const employer = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/prijava", employer)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
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

          <label htmlFor="email" className="sr-only">
            Email adresa
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={classnames("form-control rounded-top", {
              "is-invalid": errors.email
            })}
            placeholder="Email adresa"
            value={this.state.email}
            onChange={this.onChange}
            required
            autoFocus
          />
          {errors.email && (
            <div className="invalid-feedback auth-warning">{errors.email}</div>
          )}

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={classnames("form-control rounded-bottom", {
              "is-invalid": errors.password
            })}
            placeholder="Šifra"
            value={this.state.password}
            onChange={this.onChange}
            required
          />
          {errors.password && (
            <div className="invalid-feedback auth-warning">
              {errors.password}
            </div>
          )}
          <br />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Prijavi se
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
