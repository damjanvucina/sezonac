import React, { Component } from "react";
import "./JobCategory.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./SearchBar";
import AdCard from "./AdCard";
import { filterAds } from "../../actions/adActions";

class JobCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      ads: [],
      numOfAds: ""
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("component will receive props called");
    if (nextProps.category) {
      this.setState({ category: nextProps.category });
    }

    if (nextProps.ads) {
      // console.log("tip je");
      // console.log(typeof nextProps.ads);
      this.setState({ ads: nextProps.ads });
    }
  }

  render() {
    const { ads, category } = this.props.ads;

    console.log(ads);
    console.log(category);

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
      />
    ));
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4 mb-4">{category}</h1>
        </div>

        <div className="row">
          <SearchBar />

          <div className="col-md-8 order-md-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">&nbsp;&nbsp;&nbsp;Broj oglasa</span>
              <span className="badge badge-secondary badge-pill">
                {ads.length}
              </span>
            </h4>
            <div className="card-deck mb-6">{adsCards}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  ads: state.ads
});

export default connect(
  mapStateToProps,
  { filterAds }
)(withRouter(JobCategory));
