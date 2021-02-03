const express = require('express');
const incomeControllers = require('../controllers/income');

const router = express.Router();

router.post('/', incomeControllers.createIncome);

module.exports = router;