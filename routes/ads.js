const express = require("express");
const router = express.Router();
const passport = require("passport");

const validateAdInput = require("../validation/ad");
const Ad = require("../models/Ad");

router.get("/", (req, res) => {
  const conditions = {};
  let sort;

  for (const [key, value] of Object.entries(req.query)) {
    conditions[key] = value;
  }

  if (conditions.kategorije === "sve") {
    delete conditions.kategorije;
  }

  if (conditions.sort) {
    sort = conditions.sort;
    delete conditions.sort;
  }

  let query = Ad.find(conditions);
  if (sort !== undefined) {
    query = query.sort(sort);
  }

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
