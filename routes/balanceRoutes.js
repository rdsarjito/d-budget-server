const mongoose = require('mongoose');
const Income = mongoose.model('incomes');
const Expense = mongoose.model('expenses');
const Category = mongoose.model('category');
const Transaction = mongoose.model('transactions');

module.exports = app => {
  
  app.post('/api/transactions', async (req, res) => {
    const date = new Date();
    console.log(req.body.data)

    const { description, amount, type } = req.body.data;
    const newIncome = new Transaction ({ description, amount, type, date });

    const data = await newIncome.save();
    res.status(201).send(data);
  });

  app.get('/api/transactions', async (req, res) => {
    Transaction.find()
      .then(data => res.json(data));
  });

  app.post('/api/category', async (req, res) => {
    const date = new Date();
    const { category } = req.body.data;
    const newCategory = new Category ({ category, date });

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