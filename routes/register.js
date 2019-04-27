const express = require("express");
const bcrypt = require("bcryptjs");

const validateRegisterInput = require("../validation/register");

const Employer = require("../models/Employer");

const router = express.Router();

/**
 * @route Post /registracija
 * @description Register employer
 * @access Public
 */
router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Employer.findOne({
    email: req.body.email
  }).then(employer => {
    if (employer) {
      errors.email = "Email već postoji";
      return res.status(400).json(errors);
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          console.log("greska " + err);
          throw err;
        }

        const newEmployer = new Employer({
          name: req.body.name,
          email: req.body.email,
          password: hash
        });

        newEmployer
          .save()
          .then(employer => res.json(employer))
          .catch(err => console.log(err));
      });
    });
  });
});

module.exports = router;
