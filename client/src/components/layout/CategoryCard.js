import React, { Component } from "react";
import "./CategoryCard.css";

class CategoryCard extends Component {
  render() {
    const { imgSrc, title, onCategoryCardClick } = this.props;

    return (
      <div className="card mb-4 shadow-sm">
        <div className="img-hover">
          <img src={imgSrc} alt="" className="card-img-top img-responsive" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              Oglasa u posljednjem tjednu:{" "}
              <span className="badge badge-dark">1</span>
            </li>
            <li>
              Ukupno oglasa: <span className="badge badge-dark">14</span>
            </li>
            <li>
              Prosječna satnica: <span className="badge badge-dark">25 kn</span>
            </li>
            <br />
            <p className="card-text">
              <small className="text-muted">
                Posljednji oglas: prije 4 sata
              </small>
            </p>
          </ul>
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

export default CategoryCard;
