const mongoose = require('mongoose');
const Income = mongoose.model('incomes');
const Expense = mongoose.model('expenses');

module.exports = app => {
  
  app.post('/api/income', async (req, res) => {
    const date = new Date();
    const { description, amount, category } = req.body.data;
    const typeBalance = 'income';
    const newIncome = new Income ({ description, amount, category, typeBalance, date });

    const data = await newIncome.save();
    res.status(201).send(data);
  });

  app.post('/api/expense', async (req, res) => {
    const date = new Date();
    const { description, amount, category } = req.body.data;
    const typeBalance = 'expense';
    const newExpense = new Expense ({ description, amount, category, typeBalance, date });

    const data = await newExpense.save();
    res.status(201).send(data)
  });

  app.get('/api/income', async (req, res) => {
    Income.find()
      .then(description => res.json(description));
  });

  app.get('/api/expense', async (req, res) => {
    Expense.find()
      .then(expense => res.json(expense));
  });

  app.delete('/api/income/:id', (req, res) => {
    Income.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });

  app.delete('/api/expense/:id', (req, res) => {
    Expense.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });

  app.get('/api/')
};