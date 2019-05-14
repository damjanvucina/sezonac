import React, { Component } from "react";
import "./SearchBar.css";
import regions from "./regions";
import { connect } from "react-redux";
import filterCitiesByRegion from "../../utils/filterCitiesByRegion";
import PropTypes from "prop-types";
import SelectListInputGroup from "../common/SelectListInputGroup";
import getDefaultCategoryOptions from "../../utils/getDefaultCategoryOptions";
import getDefaultSalaryFrequencyOptions from "../../utils/getDefaultSalaryFrequencyOptions";
import getDefaultSortOptions from "../../utils/getDefaultSortOptions";
import InputGroup from "../common/InputGroup";
import isEmpty from "../../utils/isEmpty";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: "DEFAULT",
      city: "DEFAULT",
      // category: "DEFAULT",
      category: this.props.ads.category,
      frequency: "DEFAULT",
      amountFrom: "",
      amountTo: "",
      jobstartdate: "",
      adexpirationdate: "",
      regionOptions: regions,
      cityOptions: [],
      errors: {},
      sort: "",
      filterAdsFr: this.props.filterAdsFr
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

    // console.log(e.target.name + " " + e.target.value);
    if (e.target.name === "region" && e.target.value === "DEFAULT") {
      this.setState({ city: "DEFAULT" });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log("kat je " + this.state.region);

    const searchOptions = {
      region: this.state.region,
      city: this.state.region === "DEFAULT" ? "DEFAULT" : this.state.city,
      category: this.state.category,
      frequency: this.state.frequency,
      amountFrom: this.state.amountFrom,
      amountTo: this.state.amountTo,
      sort: this.state.sort
    };

    // console.log(searchOptions);
    // this.countFilters();

    this.state.filterAdsFr();
  }

  regionSelected(e) {
    this.onChange(e);

    let cities = filterCitiesByRegion(e.target.value);
    this.setState({ cityOptions: cities });
  }

  countFilters() {
    let filterCounter = 0;
    // console.log("----------------");
    for (const [key, value] of Object.entries(this.state)) {
      // console.log(key + ": " + value);
      if (
        value !== "DEFAULT" &&
        !isEmpty(value) &&
        key !== "regionOptions" &&
        key !== "cityOptions"
      ) {
        // console.log(key + ": " + value);
        filterCounter++;
      }
    }
    // console.log("----------------");
    return filterCounter;
  }

  render() {
    const { regionOptions, cityOptions, errors, category } = this.state;

    return (
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Filtri</span>
          <span className="badge badge-secondary badge-pill">
            {this.countFilters()}
          </span>
        </h4>

        <SelectListInputGroup
          id="category"
          name="category"
          error={errors.category}
          placeholder="Kategorija posla"
          value={this.state.category}
          onChange={this.onChange}
          label="Kategorija"
          defaultClasses="form-control rounded-0"
          options={[...getDefaultCategoryOptions(), "Sve kategorije"]}
          defaultOption="Odaberite kategoriju"
          selectedOption={this.props.ads.category}
          isSearchBar={true}
        />

        <SelectListInputGroup
          id="region"
          name="region"
          error={errors.region}
          placeholder="Odaberite županiju"
          value={this.state.region}
          onChange={this.regionSelected.bind(this)}
          label="Županija"
          defaultClasses="form-control rounded-0 rounded-top"
          options={regionOptions}
          defaultOption="Odaberite županiju"
          isSearchBar={true}
        />

        <SelectListInputGroup
          id="city"
          name="city"
          error={errors.city}
          placeholder="Mjesto"
          value={this.state.city}
          onChange={this.onChange}
          disabled={cityOptions === undefined || cityOptions.length === 0}
          label="Mjesto"
          defaultClasses="form-control rounded-0"
          options={cityOptions}
          defaultOption="Odaberite mjesto"
          isSearchBar={true}
        />

        <SelectListInputGroup
          id="frequency"
          name="frequency"
          error={errors.frequency}
          placeholder="Odaberite oblik plaćanja"
          value={this.state.frequency}
          onChange={this.onChange}
          label="Plaćanje"
          defaultClasses="form-control rounded-0"
          options={getDefaultSalaryFrequencyOptions()}
          defaultOption="Oblik plaćanja"
          isSearchBar={true}
        />

        <InputGroup
          type="number"
          id="amountFrom"
          name="amountFrom"
          error={errors.amount}
          placeholder="Od (min)"
          value={this.state.amountFrom}
          onChange={this.onChange}
          label="Iznos plaćanja"
          defaultClasses="form-control rounded-0"
          appendix="HRK"
          disabled={this.state.frequency === "DEFAULT"}
          isSearchBar={true}
        />

        <InputGroup
          type="number"
          id="amountTo"
          name="amountTo"
          error={errors.amount}
          placeholder="Do (max)"
          value={this.state.amountTo}
          onChange={this.onChange}
          label="Iznos plaćanja"
          defaultClasses="form-control rounded-0"
          appendix="HRK"
          disabled={this.state.frequency === "DEFAULT"}
          isSearchBar={true}
        />

        <br />
        <SelectListInputGroup
          id="sort"
          name="sort"
          placeholder="Sortiraj"
          value={this.state.sort}
          onChange={this.onChange}
          label="Sortiraj"
          defaultClasses="form-control rounded-0"
          options={getDefaultSortOptions()}
          defaultOption="Odaberi"
          isSearchBar={true}
        />

        <br />
        <button
          className="btn btn-lg btn-dark btn-block rounded-0"
          type="submit"
          onClick={this.onSubmit}
        >
          Primjeni
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  errors: PropTypes.object.isRequired,
  ads: PropTypes.object.isRequired,
  cityOptions: PropTypes.array,
  category: PropTypes.string,
  filterAdsFr: PropTypes.func
};

const mapStateToProps = state => ({
  errors: state.errors,
  ads: state.ads
});

export default connect(mapStateToProps)(SearchBar);
