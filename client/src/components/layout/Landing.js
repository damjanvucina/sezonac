import React from "react";
import JobCard from "./JobCard";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Tražiš sezonski posao?</h1>

        <p className="lead">
          Odaberi kategoriju i pretraži poslove koji ti najviše odgovaraju.
          Jednim klikom do zarade!
        </p>
      </div>

      <div className="card-deck mb-3 text-center">
        <div className="row">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="row">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;
