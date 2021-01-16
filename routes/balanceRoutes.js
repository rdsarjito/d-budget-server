const mongoose = require('mongoose');
const Income = mongoose.model('incomes');
const Expense = mongoose.model('expenses');

module.exports = app => {
  app.post('/api/income', async (req, res) => {
    const { description, amount } = req.body.data;
    const newIncome = new Income ({ description, amount });

    const data = await newIncome.save();
    res.status(201).send(data)
  });

  app.post('/api/expense', async (req, res) => {
    const { description, amount } = req.body.data;
    const newExpense = new Expense ({ description, amount });

    const data = await newExpense.save();
    res.status(201).send(data)
  });

  app.get('/api/income', async (req, res) => {
    Income.find()
      .then(income => res.json(income));
  });

  app.get('/api/expense', async (req, res) => {
    Expense.find()
      .then(expense => res.json(expense));
  });

  app.delete('/api/income/:id', (req, res) => {
    Income.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });
};