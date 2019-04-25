const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateAdInput = require('../validation/ad');
const Ad = require('../models/Ad');

/**
 * @route Post /oglasi/novi || oglasi/uredi/oglas_id
 * @description Create a new ad or edit an existing one
 * @access Private
 */
router.post(['/novi', '/uredi/:ad_id'], passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateAdInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }

    const adFields = {};
    adFields.employer = req.user.id;
    adFields.name = req.user.name;

    if (req.body.region) {
        adFields.region = req.body.region;
    }
    if (req.body.city) {
        adFields.city = req.body.city;
    }
    if (req.body.category) {
        adFields.category = req.body.category;
    }
    if (req.body.employees) {
        adFields.employees = req.body.employees;
    }

    adFields.salary = {};
    if (req.body.frequency) {
        adFields.salary.frequency = req.body.frequency;
    }
    if (req.body.amount) {
        adFields.salary.amount = req.body.amount;
    }

    if (req.body.description) {
        adFields.description = req.body.description;
    }

    if (req.body.jobstartdate) {
        adFields.jobstartdate = req.body.jobstartdate;
    }

    if (req.body.adexpirationdate) {
        adFields.adexpirationdate = req.body.adexpirationdate;
    }

    if (req.body.contact) {
        adFields.contact = req.body.contact;
    }

    //employer created a new ad
    if (req.params.ad_id === undefined) {
        new Ad(adFields).save().then(ad => res.json(ad));

        //employer edited an existing ad
    } else {
        Ad.findOneAndUpdate({_id: req.params.ad_id}, {$set: adFields}, {new: true})
            .then(ad => res.json(ad))
            .catch(err => console.log(err));
    }
});

router.get('/', (req, res) => {
    // Ad.find(req.params.category_id === 'sve' ? {} : {category: req.params.category_id}, (err, docs) => {
    //     res.json(docs);
    // });

    const query = {};
    let sort;

    for(const [key, value] of Object.entries(req.query)){
        query[key] = value;
    }

    if(query.kategorije === 'sve'){
        delete query.kategorije;
    }


    if(query.sort){
        sort = query.sort;
        delete query.sort;
    }

    const current = Ad.find(query);
    if(sort !== undefined){
        current.sort(sort);
    }

    // res.json(query);
    // current.sort({'salary.amount': 'desc'});
    // current.where('salary.amount').gt(100);

    current.exec((err, docs) => {
        res.json(docs);
    })
});

module.exports = router;