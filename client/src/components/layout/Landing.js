import React, { Component } from "react";
import CategoryCard from "./CategoryCard";
import "./Landing.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import administration from "../../img/administration.jpg";
import catering from "../../img/catering.jpg";
import cleaning from "../../img/cleaning.jpg";
import construction from "../../img/construction.jpg";
import beauty from "../../img/beauty.jpg";
import questionnaire from "../../img/questionnaire.jpg";
import sales from "../../img/sales.jpg";
import sport from "../../img/sport.jpg";
import tourism from "../../img/tourism.jpg";
import transport from "../../img/transport.jpg";
import other from "../../img/other.jpg";
import misc from "../../img/misc.jpg";

import { filterAds } from "../../actions/adActions";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    };

    this.onCategoryCardClick = this.onCategoryCardClick.bind(this);
  }

  onCategoryCardClick(cardCategory) {
    this.props.filterAds({ category: cardCategory }, this.props.history);
  }

  render() {
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
            <CategoryCard
              imgSrc={administration}
              title="Administracija"
              category="Administracija"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={questionnaire}
              title="Anketiranje"
              category="Anketiranje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={cleaning}
              title="Čišćenje"
              category="Čišćenje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />
          </div>

          <div className="row">
            <CategoryCard
              imgSrc={construction}
              title="Fizički poslovi"
              category="Fizički poslovi"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={beauty}
              title="Ljepota"
              category="Ljepota"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={transport}
              title="Prijevoz"
              category="Prijevoz"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />
          </div>

          <div className="row">
            <CategoryCard
              imgSrc={sales}
              title="Prodaja"
              category="Prodaja"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={sport}
              title="Sport i zdravlje"
              category="Sport i zdravlje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={tourism}
              title="Turizam"
              category="Turizam"
              onCategoryCardClick={e => this.onCategoryCardClick(e)}
            />
          </div>

          <div className="row">
            <CategoryCard
              imgSrc={catering}
              title="Ugostiteljstvo"
              category="Ugostiteljstvo"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={other}
              title="Ostalo"
              category="Ostalo"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />

            <CategoryCard
              imgSrc={misc}
              title="Sve kategorije"
              category="Sve kategorije"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
            />
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
)(withRouter(Landing));
