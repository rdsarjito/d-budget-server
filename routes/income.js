const express = require('express');
const router = express.Router();

const incomeControllers = require('../controllers/income');

router.post('/', incomeControllers.createIncome);
router.get('/', incomeControllers.getIncome);
router.delete('/:id', incomeControllers.deleteIncome);

module.exports = router;