const mongoose = require('mongoose');
const Income = mongoose.model('incomes');
const Expense = mongoose.model('expenses');
const Category = mongoose.model('category');

module.exports = app => {

  app.post('/api/income', async (req, res) => {
    const { description, amount, category } = req.body.data;
    const date = new Date();
    const typeBalance = 'income';
    const newIncome = new Income ({ description, amount, category, date, typeBalance });

    const data = await newIncome.save();
    res.status(201).send(data);
  });

  app.post('/api/expense', async (req, res) => {
    const { description, amount, category } = req.body.data;
    const date = new Date();
    const typeBalance = 'expense';
    const newExpense = new Expense ({ description, amount, category, typeBalance, date, typeBalance });

    const data = await newExpense.save();
    res.status(201).send(data)
  });

  app.post('/api/category', async (req, res) => {
    const date = new Date();
    const { category, color, typeBalance } = req.body.data;
    const amount = 0;
    const newCategory = new Category ({ category, amount, typeBalance, color, date });

    const data = await newCategory.save();
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

  app.get('/api/category', async (req, res) => {
    Category.find()
      .then(category => res.json(category));
  });

  app.delete('/api/income/:id', (req, res) => {
    Income.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });

  app.delete('/api/expense/:id', (req, res) => {
    Expense.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });

  app.delete('/api/category/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });
};