const express = require('express');
const expenseControllers = require('../controllers/expense');

const router = express.Router();

router.post('/', expenseControllers.createExpense);

module.exports = router;