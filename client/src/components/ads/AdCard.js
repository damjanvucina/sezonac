import React, { Component } from "react";
import "./AdCard.css";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/hr";

class AdCard extends Component {
  render() {
    const {
      name,
      region,
      city,
      category,
      employees,
      frequency,
      amount,
      description,
      jobstartdate,
      adexpirationdate,
      contact
    } = this.props;

    const moment = require("moment");
    moment.locale("hr");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card mb-4 shadow-sm kartica">
              <div className="card-header text-center bg-light">
                {city}, {region}
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title text-center">
                  {name}
                </h1>

                <h2 className="card-title pricing-card-title text-center">
                  {amount} kn
                  <small className="text-muted">
                    /{frequency === "Po satu" && "sat"}
                    {frequency === "Po danu" && "dan"}
                    {frequency === "Po mjesecu" && "mjesec"}
                    {frequency === "Po izvršenom poslu" && "mjesec"}
                  </small>
                </h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Opis</th>
                      <td>{description}</td>
                    </tr>
                    <tr>
                      <th>Traženo zaposlenika</th>
                      <td>{employees}</td>
                    </tr>
                    <tr>
                      <th>Početak posla</th>
                      <td>
                        <Moment fromNow>{jobstartdate}</Moment>
                        {" ("}
                        <Moment format="LL">{jobstartdate}</Moment>
                        {")"}
                      </td>
                    </tr>
                    <tr>
                      <th>Istek oglasa</th>
                      <td>
                        <Moment fromNow>{adexpirationdate}</Moment>
                        {" ("}
                        <Moment format="LL">{adexpirationdate}</Moment>
                        {")"}
                      </td>
                    </tr>
                    <tr>
                      <th>Kontakt</th>
                      <td>{contact}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-footer text-muted text-center bg-light">
                Ugostiteljstvo
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdCard;
