const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


router.get('/test/:tid', (req, res) => {
    // res.send(req.params['tid']);
    res.send(req.params.tid);
});

module.exports = router;

