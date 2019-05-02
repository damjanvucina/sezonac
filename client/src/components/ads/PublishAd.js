import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./PublishAd.css";
import regions from "./regions";
import filterCitiesByRegion from "../../utils/filterCitiesByRegion";

class PublishAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionOptions: regions
    };
  }

  regionSelected(e) {
    console.log(e.target.value);
    let cities = filterCitiesByRegion(e.target.value);
    this.setState({ cityOptions: cities });
  }

  render() {
    const { regionOptions, cityOptions } = this.state;

    return (
      <div className="container-fluid text-center">
        <form className="form-signin">
          <div className="display-4">Objavi oglas</div>
          <br />

          <p className="mb-4 lead">Opišite o kakvom poslu se radi.</p>

          <div className="input-group">
            <label htmlFor="region" className="sr-only">
              Županija rada
            </label>
            <div className="input-group-prepend rounded-0">
              <span
                className="input-group-text input-fixed-duljina labela"
                id="basic-addon1"
              >
                Županija rada
              </span>
            </div>
            <select
              type="text"
              id="region"
              className="form-control rounded-0 select-lista"
              placeholder="Odaberite županiju"
              required
              autoFocus
              onChange={this.regionSelected.bind(this)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Odaberite županiju
              </option>
              {regionOptions.map(region => (
                <option key={region}>{region}</option>
              ))}
              )}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="city" className="sr-only">
              Mjesto rada
            </label>
            <div className="input-group-prepend rounded-0">
              <span
                className="input-group-text input-fixed-duljina labela"
                id="basic-addon1"
              >
                Mjesto rada
              </span>
            </div>
            <select
              id="city"
              className="form-control rounded-0 select-lista"
              placeholder="Mjesto rada"
              required
              autoFocus
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Odaberite mjesto rada
              </option>
              {cityOptions
                ? cityOptions.map(city => <option key={city}>{city}</option>)
                : null}
              )}
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="city" className="sr-only">
              Kategorija posla
            </label>
            <div className="input-group-prepend">
              <span
                className="input-group-text input-fixed-duljina  labela"
                id="basic-addon1"
              >
                Kategorija posla
              </span>
            </div>
            <select
              type="text"
              id="city"
              className="form-control rounded-0 select-lista"
              placeholder="Kategorija posla"
              required
              autoFocus
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Odaberite kategoriju
              </option>
              <option>Ugostiteljstvo</option>
              <option>Anketiranje</option>
              <option>Prodaja</option>
              <option>Fizički poslovi</option>
              <option>Prijevoz</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="city" className="sr-only labela">
              Traženo radnika
            </label>
            <div className="input-group-prepend">
              <span
                className="input-group-text input-fixed-duljina rounded-0  labela"
                id="basic-addon1"
              >
                Traženo radnika
              </span>
            </div>
            <input
              type="number"
              id="employees"
              className="form-control rounded-0"
              placeholder="Traženo radnika"
              required
              autoFocus
            />
          </div>

          <label htmlFor="salary" className="sr-only">
            Satnica
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary dropdown-toggle input-fixed-duljina rounded-0 labela"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Oblik plaćanja
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Po satu
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Po danu
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Po mjesecu
                </a>
              </div>
            </div>
            <input
              type="number"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append">
              <span className="input-group-text rounded-0" id="basic-addon2">
                HRK
              </span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="city" className="sr-only">
              Opis posla
            </label>
            <div className="input-group-prepend">
              <span
                className="input-group-text input-fixed-duljina rounded-0 labela"
                id="basic-addon1"
              >
                Opis posla
              </span>
            </div>
            <textarea
              type="text"
              id="opisposla"
              className="form-control rounded-0 tekst-boks"
              rows="3"
              placeholder="Opis posla"
              required
              autoFocus
            />
          </div>

          <label htmlFor="adend" className="sr-only">
            Početak obavljanja
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text input-fixed-duljina rounded-0  labela">
                Početak obavljanja
              </span>
            </div>
            <input type="date" className="form-control rounded-0" id="adend" />
          </div>

          <label htmlFor="adend" className="sr-only">
            Oglas ističe
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text input-fixed-duljina rounded-0  labela">
                Oglas ističe
              </span>
            </div>
            <input type="date" className="form-control rounded-0" id="adend" />
          </div>

          <div className="input-group">
            <label htmlFor="city" className="sr-only">
              Kontakt
            </label>
            <div className="input-group-prepend">
              <span
                className="input-group-text input-fixed-duljina  labela"
                id="basic-addon1"
              >
                Kontakt
              </span>
            </div>
            <input
              type="text"
              id="contact"
              className="form-control rounded-0"
              placeholder="Kontakt"
              required
              autoFocus
            />
          </div>

          <br />
          <button
            className="btn btn-lg btn-dark btn-block rounded-0"
            type="submit"
          >
            Objavi oglas
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(PublishAd);
