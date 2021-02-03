const express = require('express');
const expenseControllers = require('../controllers/expense');

const router = express.Router();

router.post('/', expenseControllers.createExpense);
router.get('/', expenseControllers.getExpense);
router.delete('/:id', expenseControllers.deleteExpense);

module.exports = router;