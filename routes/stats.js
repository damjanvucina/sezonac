const express = require("express");
const passport = require("passport");
const router = express.Router();
const Stats = require("../models/Stats");
const statsCollectionId = require("../config/keys").statsCollectionId;
const categoryToCategoryStatName = require("../utils/categoryToCategoryStatName");
const calculateHourlyRate = require("../utils/calculateHourlyRate");

router.get("/", (req, res) => {
  Stats.findById(statsCollectionId, (err, docs) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.json(docs);
    }
  });
});

router.post("/stvori", (req, res) => {
  const statFields = {};
  const moment = require("moment");

  statFields.administracija = {};
  statFields.administracija.totalads = 0;
  statFields.administracija.avghourlyrate = 0;
  statFields.administracija.lastadcreatedat = moment(Date.now());

  statFields.anketiranje = {};
  statFields.anketiranje.totalads = 0;
  statFields.anketiranje.avghourlyrate = 0;
  statFields.anketiranje.lastadcreatedat = moment(Date.now());

  statFields.ciscenje = {};
  statFields.ciscenje.totalads = 0;
  statFields.ciscenje.avghourlyrate = 0;
  statFields.ciscenje.lastadcreatedat = moment(Date.now());

  statFields.fizickiposlovi = {};
  statFields.fizickiposlovi.totalads = 0;
  statFields.fizickiposlovi.avghourlyrate = 0;
  statFields.fizickiposlovi.lastadcreatedat = moment(Date.now());

  statFields.ljepota = {};
  statFields.ljepota.totalads = 0;
  statFields.ljepota.avghourlyrate = 0;
  statFields.ljepota.lastadcreatedat = moment(Date.now());

  statFields.prijevoz = {};
  statFields.prijevoz.totalads = 0;
  statFields.prijevoz.avghourlyrate = 0;
  statFields.prijevoz.lastadcreatedat = moment(Date.now());

  statFields.prodaja = {};
  statFields.prodaja.totalads = 0;
  statFields.prodaja.avghourlyrate = 0;
  statFields.prodaja.lastadcreatedat = moment(Date.now());

  statFields.sportizdravlje = {};
  statFields.sportizdravlje.totalads = 0;
  statFields.sportizdravlje.avghourlyrate = 0;
  statFields.sportizdravlje.lastadcreatedat = moment(Date.now());

  statFields.turizam = {};
  statFields.turizam.totalads = 0;
  statFields.turizam.avghourlyrate = 0;
  statFields.turizam.lastadcreatedat = moment(Date.now());

  statFields.ugostiteljstvo = {};
  statFields.ugostiteljstvo.totalads = 0;
  statFields.ugostiteljstvo.avghourlyrate = 0;
  statFields.ugostiteljstvo.lastadcreatedat = moment(Date.now());

  statFields.ostalo = {};
  statFields.ostalo.totalads = 0;
  statFields.ostalo.avghourlyrate = 0;
  statFields.ostalo.lastadcreatedat = moment(Date.now());

  statFields.svekategorije = {};
  statFields.svekategorije.totalads = 0;
  statFields.svekategorije.avghourlyrate = 0;
  statFields.svekategorije.lastadcreatedat = moment(Date.now());

  new Stats(statFields).save().then(stats => res.json(stats));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Stats.findById(statsCollectionId, (err, doc) => {
      const totalads =
        doc[categoryToCategoryStatName(req.query.category)]["totalads"];
      const avghourlyrate =
        doc[categoryToCategoryStatName(req.query.category)]["avghourlyrate"];
      const lastadcreatedat =
        doc[categoryToCategoryStatName(req.query.category)]["lastadcreatedat"];

      doc[categoryToCategoryStatName(req.query.category)]["totalads"] =
        totalads + 1;

      doc[categoryToCategoryStatName(req.query.category)][
        "avghourlyrate"
      ] = calculateHourlyRate(parseInt(req.query.amount), req.query.frequency);

      const moment = require("moment");
      doc[categoryToCategoryStatName(req.query.category)][
        "lastadcreatedat"
      ] = moment(Date.now());

      doc.save();
      res.json(doc);
    }).catch(err => res.json(err));
  }
);

module.exports = router;
