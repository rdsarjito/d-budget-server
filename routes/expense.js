const express = require('express');
const router = express.Router();

const expenseControllers = require('../controllers/expense');

router.post('/', expenseControllers.createExpense);
router.get('/', expenseControllers.getExpense);
router.delete('/:id', expenseControllers.deleteExpense);

module.exports = router;