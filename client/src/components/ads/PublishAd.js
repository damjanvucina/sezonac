import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./PublishAd.css";
import regions from "./regions";
import filterCitiesByRegion from "../../utils/filterCitiesByRegion";
import getDefaultCategoryOptions from "../../utils/getDefaultCategoryOptions";
import getDefaultSalaryFrequencyOptions from "../../utils/getDefaultSalaryFrequencyOptions";
import { createNewAd } from "../../actions/adActions";
import { withRouter } from "react-router-dom";
import InputGroup from "../common/InputGroup";
import TextAreaInputGroup from "../common/TextAreaInputGroup";
import SelectListInputGroup from "../common/SelectListInputGroup";

class PublishAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: "DEFAULT",
      city: "DEFAULT",
      category: "DEFAULT",
      employees: "",
      frequency: "DEFAULT",
      amount: "",
      description: "",
      jobstartdate: "",
      adexpirationdate: "",
      contact: "",
      regionOptions: regions,
      cityOptions: [],
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.cityOptions) {
      this.setState({ cityOptions: nextProps.cityOptions });
    }
    if (!nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const moment = require("moment");

    const Ad = {
      region: this.state.region,
      city: this.state.city,
      category: this.state.category,
      employees: this.state.employees,
      frequency: this.state.frequency,
      amount: this.state.amount,
      description: this.state.description,
      jobstartdate: moment(this.state.jobstartdate),
      adexpirationdate: moment(this.state.adexpirationdate),
      contact: this.state.contact
    };

    this.props.createNewAd(Ad, this.props.history);
  }

  regionSelected(e) {
    this.onChange(e);

    let cities = filterCitiesByRegion(e.target.value);
    this.setState({ cityOptions: cities });
  }

  render() {
    const { regionOptions, cityOptions, errors } = this.state;

    return (
      <div className="container-fluid text-center">
        <form className="form-signin" noValidate onSubmit={this.onSubmit}>
          <div className="display-4">Objavi oglas</div>
          <br />

          <p className="mb-4 lead">Opišite o kakvom poslu se radi.</p>

          <SelectListInputGroup
            id="category"
            name="category"
            error={errors.category}
            placeholder="Kategorija posla"
            value={this.state.category}
            onChange={this.onChange}
            label="Kategorija posla"
            defaultClasses="form-control rounded-0"
            options={getDefaultCategoryOptions()}
            defaultOption="Odaberite kategoriju posla"
          />

          <SelectListInputGroup
            id="region"
            name="region"
            error={errors.region}
            placeholder="Odaberite županiju rada"
            value={this.state.region}
            onChange={this.regionSelected.bind(this)}
            label="Odaberite županiju"
            defaultClasses="form-control rounded-0"
            options={regionOptions}
            defaultOption="Odaberite županiju rada"
          />

          <SelectListInputGroup
            id="city"
            name="city"
            error={errors.city}
            placeholder="Mjesto rada"
            value={this.state.city}
            onChange={this.onChange}
            disabled={cityOptions.length === 0}
            label="Mjesto rada"
            defaultClasses="form-control rounded-0"
            options={cityOptions}
            defaultOption="Odaberite mjesto rada"
          />

          <InputGroup
            type="number"
            id="employees"
            name="employees"
            error={errors.employees}
            placeholder="Traženo radnika"
            value={this.state.employees}
            onChange={this.onChange}
            label="Traženo radnika"
            defaultClasses="form-control rounded-0"
          />

          <SelectListInputGroup
            id="frequency"
            name="frequency"
            error={errors.frequency}
            placeholder="Odaberite oblik plaćanja"
            value={this.state.frequency}
            onChange={this.onChange}
            label="Oblik plaćanja"
            defaultClasses="form-control rounded-0"
            options={getDefaultSalaryFrequencyOptions()}
            defaultOption="Odaberite oblik plaćanja"
          />

          <InputGroup
            type="number"
            id="amount"
            name="amount"
            error={errors.amount}
            placeholder="Iznos plaćanja"
            value={this.state.amount}
            onChange={this.onChange}
            label="Iznos plaćanja"
            defaultClasses="form-control rounded-0"
            appendix="HRK"
          />

          <TextAreaInputGroup
            id="description"
            name="description"
            error={errors.description}
            placeholder="Opis posla"
            value={this.state.description}
            onChange={this.onChange}
            label="Opis posla"
            defaultClasses="form-control rounded-0"
          />

          <InputGroup
            type="date"
            id="jobstartdate"
            name="jobstartdate"
            error={errors.jobstartdate}
            placeholder="Početak obavljanja"
            value={this.state.jobstartdate}
            onChange={this.onChange}
            label="Početak obavljanja"
            defaultClasses="form-control rounded-0"
          />

          <InputGroup
            type="date"
            id="adexpirationdate"
            name="adexpirationdate"
            error={errors.adexpirationdate}
            placeholder="Oglas ističe"
            value={this.state.adexpirationdate}
            onChange={this.onChange}
            label="Oglas ističe"
            defaultClasses="form-control rounded-0"
          />

          <InputGroup
            type="text"
            id="contact"
            name="contact"
            error={errors.contact}
            placeholder="Kontakt"
            value={this.state.contact}
            onChange={this.onChange}
            label="Kontakt"
            defaultClasses="form-control rounded-0"
          />

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

PublishAd.propTypes = {
  createNewAd: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  ads: PropTypes.object.isRequired,
  cityOptions: PropTypes.array
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { createNewAd }
)(withRouter(PublishAd));
