const express = require('express');
const incomeControllers = require('../controllers/income');

const router = express.Router();

router.post('/', incomeControllers.createincome);

module.exports = router;