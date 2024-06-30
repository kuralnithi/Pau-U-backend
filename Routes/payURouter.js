const express = require('express');

const { hash, success, failure } = require('../Controller/controller');

const router = express.Router();

router.post('/hash',hash);
router.post('/success',success)
router.post('/failure',failure)

module.exports = router;