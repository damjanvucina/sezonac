const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('authorization works'));

router.get('/registracija', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);


});

module.exports = router;