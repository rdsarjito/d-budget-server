const express = require('express');
const incomeControllers = require('../controllers/income');

const router = express.Router();

router.post('/', incomeControllers.createIncome);
router.get('/', incomeControllers.getIncome);
router.delete('/:id', incomeControllers.deleteIncome);

module.exports = router;