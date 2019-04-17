const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('oglasi works'));

module.exports = router;