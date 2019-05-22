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
import { getCategoriesStats } from "../../actions/statsActions";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      stats: this.props.stats
    };

    this.onCategoryCardClick = this.onCategoryCardClick.bind(this);
  }

  onCategoryCardClick(cardCategory) {
    this.props.filterAds({ category: cardCategory }, this.props.history);
  }

  componentWillMount() {
    this.props.getCategoriesStats();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.stats) {
      this.setState({ stats: nextProps.stats });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Tražiš sezonski posao?</h1>

          <p className="lead text-dark">
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
              totalads={this.props.stats.administracija.totalads}
              avghourlyrate={this.props.stats.administracija.avghourlyrate}
              lastadcreatedat={this.props.stats.administracija.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={questionnaire}
              title="Anketiranje"
              category="Anketiranje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.anketiranje.totalads}
              avghourlyrate={this.state.stats.anketiranje.avghourlyrate}
              lastadcreatedat={this.state.stats.anketiranje.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={cleaning}
              title="Čišćenje"
              category="Čišćenje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.ciscenje.totalads}
              avghourlyrate={this.state.stats.ciscenje.avghourlyrate}
              lastadcreatedat={this.state.stats.ciscenje.lastadcreatedat}
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
              totalads={this.state.stats.fizickiposlovi.totalads}
              avghourlyrate={this.state.stats.fizickiposlovi.avghourlyrate}
              lastadcreatedat={this.state.stats.fizickiposlovi.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={beauty}
              title="Ljepota"
              category="Ljepota"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.ljepota.totalads}
              avghourlyrate={this.state.stats.ljepota.avghourlyrate}
              lastadcreatedat={this.state.stats.ljepota.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={transport}
              title="Prijevoz"
              category="Prijevoz"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.prijevoz.totalads}
              avghourlyrate={this.state.stats.prijevoz.avghourlyrate}
              lastadcreatedat={this.state.stats.prijevoz.lastadcreatedat}
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
              totalads={this.state.stats.prodaja.totalads}
              avghourlyrate={this.state.stats.prodaja.avghourlyrate}
              lastadcreatedat={this.state.stats.prodaja.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={sport}
              title="Sport i zdravlje"
              category="Sport i zdravlje"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.sportizdravlje.totalads}
              avghourlyrate={this.state.stats.sportizdravlje.avghourlyrate}
              lastadcreatedat={this.state.stats.sportizdravlje.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={tourism}
              title="Turizam"
              category="Turizam"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.turizam.totalads}
              avghourlyrate={this.state.stats.turizam.avghourlyrate}
              lastadcreatedat={this.state.stats.turizam.lastadcreatedat}
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
              totalads={this.state.stats.ugostiteljstvo.totalads}
              avghourlyrate={this.state.stats.ugostiteljstvo.avghourlyrate}
              lastadcreatedat={this.state.stats.ugostiteljstvo.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={other}
              title="Ostalo"
              category="Ostalo"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.ostalo.totalads}
              avghourlyrate={this.state.stats.ostalo.avghourlyrate}
              lastadcreatedat={this.state.stats.ostalo.lastadcreatedat}
            />

            <CategoryCard
              imgSrc={misc}
              title="Sve kategorije"
              category="Sve kategorije"
              onCategoryCardClick={e =>
                this.onCategoryCardClick(e.target.value)
              }
              totalads={this.state.stats.svekategorije.totalads}
              avghourlyrate={this.state.stats.svekategorije.avghourlyrate}
              lastadcreatedat={this.state.stats.svekategorije.lastadcreatedat}
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
  ads: state.ads,
  stats: state.stats
});

export default connect(
  mapStateToProps,
  { filterAds, getCategoriesStats }
)(withRouter(Landing));
