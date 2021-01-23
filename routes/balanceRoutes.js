const mongoose = require('mongoose');
const Income = mongoose.model('incomes');
const Expense = mongoose.model('expenses');
const Category = mongoose.model('category');
const Transaction = mongoose.model('transactions');

module.exports = app => {
  
  app.post('/api/transactions', async (req, res) => {
    const date = new Date();

    const { description, amount, type } = req.body.data;
    console.log(type)
    const newIncome = new Transaction ({ description, amount, type, date });

    const data = await newIncome.save();
    res.status(201).send(data);
  });

  app.get('/api/transactions', async (req, res) => {
    Transaction.find()
      .then(data => res.json(data));
  });

  app.get('/api/category', async (req, res) => {
    Category.find()
      .then(category => res.json(category));
  });

  app.delete('/api/transactions/:id', (req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });

  app.delete('/api/category/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id)
      .then(() => res.json())
  });
};