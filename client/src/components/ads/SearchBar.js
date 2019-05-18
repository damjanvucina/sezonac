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
      region: this.props.ads.region,
      city: this.props.ads.city,
      category: this.props.ads.category,
      frequency: this.props.ads.frequency,
      amountFrom: this.props.ads.amountFrom,
      amountTo: this.props.ads.amountTo,
      jobstartdate: "",
      adexpirationdate: "",
      regionOptions: regions,
      cityOptions: [],
      errors: {},
      sort: this.props.ads.sort,
      performSearchBarFiltering: this.props.performSearchBarFiltering
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.name === "region" && e.target.value === "DEFAULT") {
      this.setState({ city: "DEFAULT" });
    }
    if (e.target.name === "frequency" && e.target.value === "DEFAULT") {
      this.setState({ amountFrom: "" });
      this.setState({ amountTo: "" });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const searchOptions = {
      region: this.state.region,
      city: this.state.region === "DEFAULT" ? "DEFAULT" : this.state.city,
      category: this.state.category,
      frequency: this.state.frequency,
      amountFrom: this.state.amountFrom,
      amountTo: this.state.amountTo,
      sort: this.state.sort
    };

    const filteredSearchOptions = {};
    Object.keys(searchOptions).forEach(key => {
      if (searchOptions[key] !== "DEFAULT" && !isEmpty(searchOptions[key])) {
        filteredSearchOptions[key] = searchOptions[key];
      }
    });

    this.state.performSearchBarFiltering(filteredSearchOptions);
  }

  componentWillMount() {
    if (this.state.region !== "") {
      this.setState({
        cityOptions: filterCitiesByRegion(this.state.region)
      });
    }
  }

  regionSelected(e) {
    this.onChange(e);

    let cities = filterCitiesByRegion(e.target.value);
    this.setState({ cityOptions: cities });
  }

  countFilters() {
    let filterCounter = 0;

    for (const [key, value] of Object.entries(this.state)) {
      if (
        value !== "DEFAULT" &&
        !isEmpty(value) &&
        key !== "regionOptions" &&
        key !== "cityOptions" &&
        key !== "performSearchBarFiltering" &&
        value !== "Sve kategorije"
      ) {
        filterCounter++;
      }
    }
    return filterCounter;
  }

  render() {
    const { regionOptions, cityOptions, errors } = this.state;

    return (
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-dark">Filtri</span>
          <span className="badge badge-dark badge-pill">
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
          options={[...getDefaultCategoryOptions()]}
          defaultOption="Sve kategorije"
          selectedOption={this.props.ads.category}
          isSearchBar={true}
          isCategoryGroup={true}
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
          selectedOption={this.props.ads.region}
          defaultOption="Sve županije"
          isSearchBar={true}
        />

        <SelectListInputGroup
          id="city"
          name="city"
          error={errors.city}
          placeholder="Mjesto"
          value={this.state.city}
          onChange={this.onChange}
          disabled={
            (cityOptions === undefined || cityOptions.length === 0) &&
            this.state.region === "DEFAULT"
          }
          label="Mjesto"
          defaultClasses="form-control rounded-0"
          options={cityOptions}
          selectedOption={this.props.ads.city}
          defaultOption="Sva mjesta"
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
          selectedOption={this.props.ads.frequency}
          defaultOption="Svi oblici plaćanja"
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
          defaultOption="Od najsvježijih"
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
  performSearchBarFiltering: PropTypes.func
};

const mapStateToProps = state => ({
  errors: state.errors,
  ads: state.ads
});

export default connect(mapStateToProps)(SearchBar);
