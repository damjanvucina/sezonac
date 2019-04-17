const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateLoginInput = require('../validation/login');
const Employer = require('../models/Employer');

const keys = require('../config/keys');


/**
 * @route /prijava
 * @description Login user
 * @access Public
 */
router.post('/', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }

    const {email, password} = req.body;

    Employer.findOne({email})
        .then(employer => {
            if (!employer) {
                errors.email = 'Navedeni email nije pronađen';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, employer.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: employer.id,
                            name: employer.name
                        };

                        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                            res.json({
                                'success': true,
                                'token': 'Bearer ' + token
                            });
                        });

                    } else {
                        errors.password = 'Unijeli ste pogrešnu šifru';
                        res.status(400).json(errors);
                    }
                }).catch(err => res.status(400).json(err));
        })


});

module.exports = router;