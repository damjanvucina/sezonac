import React, { Component, Fragment } from "react";
import "./JobCategory.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./SearchBar";
import AdCard from "./AdCard";
import { filterAds } from "../../actions/adActions";
import { jobCategoryToImg } from "../../utils/jobCategoryToImgSrc";

class JobCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      ads: [],
      numOfAds: ""
    };

    this.performSearchBarFiltering = this.performSearchBarFiltering.bind(this);
  }

  performSearchBarFiltering(query) {
    this.props.filterAds(query, this.props.history);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.category) {
      console.log("1");
      this.setState({ category: nextProps.category });
    }

    if (nextProps.ads) {
      this.setState({ ads: nextProps.ads });
    }
  }

  render() {
    const { ads, category } = this.props.ads;

    const adsCards = ads.map(ad => (
      <AdCard
        key={ad._id}
        name={ad.name}
        region={ad.region}
        city={ad.city}
        category={ad.category}
        employees={ad.employees}
        frequency={ad.salary.frequency}
        amount={ad.salary.amount}
        description={ad.description}
        jobstartdate={ad.jobstartdate}
        adexpirationdate={ad.adexpirationdate}
        contact={ad.contact}
        createdat={ad.createdat}
      />
    ));
    return (
      <Fragment>
        <div className="container-fluid no-padding">
          <div className="row">{jobCategoryToImg(category)}</div>
        </div>

        <div className="container">
          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4 mb-4">{category}</h1>
          </div>

          <div className="row">
            <SearchBar
              performSearchBarFiltering={this.performSearchBarFiltering}
            />

            <div className="col-md-8 order-md-1">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-dark">&nbsp;&nbsp;&nbsp;Broj oglasa</span>
                <span className="badge badge-dark badge-pill">
                  {ads.length}
                </span>
              </h4>
              <div className="card-deck mb-6">{adsCards}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// JobCategory.propTypes = {
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
//   ads: PropTypes.object.isRequired,
//   filterAds: PropTypes.func
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { filterAds }
)(withRouter(JobCategory));
