import React, { Component } from "react";
import "./CategoryCard.css";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/hr";

class CategoryCard extends Component {
  render() {
    const {
      imgSrc,
      title,
      onCategoryCardClick,
      totalads,
      avghourlyrate,
      lastadcreatedat
    } = this.props;

    return (
      <div className="card mb-4 shadow-sm">
        <div className="img-hover">
          <img src={imgSrc} alt="" className="card-img-top img-responsive" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              Ukupno oglasa:{" "}
              <span className="badge badge-dark">{totalads}</span>
            </li>
            <li>
              Posljednja satnica:{" "}
              <span className="badge badge-dark">
                {round(avghourlyrate, 2)} kn
              </span>
            </li>
          </ul>
          {totalads !== 0 ? (
            <div className="text-muted text-center">
              <small>
                Posljednji oglas: <Moment fromNow>{lastadcreatedat}</Moment>
              </small>
            </div>
          ) : (
            <br />
          )}
          <br />
          {/*<Link*/}
          {/*to={{*/}
          {/*pathname: "/oglasi",*/}
          {/*search: "category=" + encodeURIComponent(category)*/}
          {/*}}*/}
          {/*className="navbar-link"*/}
          {/*onClick={this.onCategoryClick.bind(this, category)}*/}
          {/*>*/}
          <button
            type="button"
            className="btn btn-lg btn-block btn-outline-dark stretched-link"
            // onClick={() => this.onCategoryCardClick(category)}
            onClick={onCategoryCardClick}
            value={title}
          >
            Pretraži
          </button>
          {/*</Link>*/}
        </div>
      </div>
    );
  }
}

const round = (value, precision) => {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export default CategoryCard;
