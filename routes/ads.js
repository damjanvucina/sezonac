const express = require("express");
const router = express.Router();
const passport = require("passport");
const statsCollectionId = require("../config/keys").statsCollectionId;
const validateAdInput = require("../validation/ad");
const Ad = require("../models/Ad");
const Stats = require("../models/Stats");

router.get("/statistika", (req, res) => {
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

router.get("/", (req, res) => {
  const conditions = {};
  let sort;

  for (const [key, value] of Object.entries(req.query)) {
    conditions[key] = value;
  }

  if (conditions.category === "Sve kategorije") {
    delete conditions.category;
  }

  if (conditions.sort) {
    sort = conditions.sort;
    delete conditions.sort;
  }

  if (conditions["frequency"]) {
    conditions["salary.frequency"] = conditions["frequency"];
    delete conditions["frequency"];
  }

  if (conditions["amount"]) {
    conditions["salary.amount"] = conditions["amount"];
    delete conditions["amount"];
  }

  let gte;
  let lte;
  if (conditions["amountFrom"]) {
    gte = conditions["amountFrom"];
    delete conditions["amountFrom"];
  }
  if (conditions["amountTo"]) {
    lte = conditions["amountTo"];
    delete conditions["amountTo"];
  }

  let query = Ad.find(conditions);
  if (gte) {
    query = query.gte("salary.amount", gte);
  }
  if (lte) {
    query = query.lte("salary.amount", lte);
  }

  let sortOption;
  switch (sort) {
    case "Od najmanje plaće":
      sortOption = "salary.amount";
      break;

    case "Od najveće plaće":
      sortOption = "-salary.amount";
      break;
  }
  query =
    sort !== undefined ? query.sort(sortOption) : query.sort("-createdat");

  query.exec((err, docs) => {
    res.json(docs);
  });
});

/**
 * @route Post /oglasi/novi || oglasi/uredi/oglas_id
 * @description Create a new ad or edit an existing one
 * @access Private
 */
router.post(
  ["/novi", "/uredi/:ad_id"],
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAdInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const adFields = {};
    adFields.employer = req.user.id;
    adFields.name = req.user.name;

    adFields.region = req.body.region;
    adFields.city = req.body.city;
    adFields.category = req.body.category;
    adFields.employees = req.body.employees;

    adFields.salary = {};
    adFields.salary.frequency = req.body.frequency;
    adFields.salary.amount = req.body.amount;

    adFields.description = req.body.description;
    adFields.jobstartdate = req.body.jobstartdate;
    adFields.adexpirationdate = req.body.adexpirationdate;
    adFields.contact = req.body.contact;

    // if (req.body.region) {
    //     adFields.region = req.body.region;
    // }
    // if (req.body.city) {
    //     adFields.city = req.body.city;
    // }
    // if (req.body.category) {
    //     adFields.category = req.body.category;
    // }
    // if (req.body.employees) {
    //     adFields.employees = req.body.employees;
    // }
    //
    // adFields.salary = {};
    // if (req.body.frequency) {
    //     adFields.salary.frequency = req.body.frequency;
    // }
    // if (req.body.amount) {
    //     adFields.salary.amount = req.body.amount;
    // }
    //
    // if (req.body.description) {
    //     adFields.description = req.body.description;
    // }
    //
    // if (req.body.jobstartdate) {
    //     adFields.jobstartdate = req.body.jobstartdate;
    // }
    //
    // if (req.body.adexpirationdate) {
    //     adFields.adexpirationdate = req.body.adexpirationdate;
    // }
    //
    // if (req.body.contact) {
    //     adFields.contact = req.body.contact;
    // }

    //employer created a new ad
    if (req.params.ad_id === undefined) {
      new Ad(adFields).save().then(ad => res.json(ad));

      //employer edited an existing ad
    } else {
      Ad.findOneAndUpdate(
        { _id: req.params.ad_id },
        { $set: adFields },
        { new: true }
      )
        .then(ad => res.json(ad))
        .catch(err => console.log(err));
    }
  }
);

module.exports = router;
