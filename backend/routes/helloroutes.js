const express = require('express');
const router = express.Router();
const loginControllers = require('../controllers/hellocontroller');

router.get('/', loginControllers.gethellodata);
router.post('/', loginControllers.posthellodat);


module.exports = router;
