const express = require('express');
const router = express.Router();

//@router Get api/Auth route
//@desc Test route
//@access Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
