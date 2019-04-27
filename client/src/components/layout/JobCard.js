import React from "react";
import { Link } from "react-router-dom";

function JobCard(props) {
  return (
    <div className="card mb-4 shadow-sm">
      <img
        src="https://i163.photobucket.com/albums/t315/massstudy/040419%20ontour/DSC_9014.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h2 className="card-title">Ugostiteljstvo</h2>
        <ul className="list-unstyled mt-3 mb-4">
          <li>
            Oglasa u posljednjem tjednu:{" "}
            <span className="badge badge-dark">17</span>
          </li>
          <li>
            Ukupno oglasa: <span className="badge badge-dark">143</span>
          </li>
          <li>
            Prosječna satnica: <span className="badge badge-dark">25 kn</span>
          </li>

          <br />
          <p className="card-text">
            <small className="text-muted">Posljednji oglas: prije 4 sata</small>
          </p>
        </ul>
        <Link
          to={{
            pathname: "/",
            search: "?category=ugostiteljstvo"
          }}
          className="navbar-link"
        >
          <button
            type="button"
            className="btn btn-lg btn-block btn-outline-dark stretched-link"
          >
            Pretraži
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
