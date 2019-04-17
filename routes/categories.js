const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('naslovnica works'));

module.exports = router;