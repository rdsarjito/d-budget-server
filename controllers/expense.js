const mongoose = require('mongoose');
const Expense = require('../models/Expense');

const createExpense = async(req, res) => {
  const { description, amount, category } = req.body.data;
  const date = new Date();
  const typeBalance = 'expense';
  const newExpense = new Expense ({ description, amount, category, typeBalance, date, typeBalance });

  const expense = await newExpense.save();
  
  try {
    res.status(201).send(expense);
  } catch (error) {
    console.log(error);
  };
};

const getExpense = async(req, res) => {
  const expense = await Expense.find();
  res.send(expense)
};

const deleteExpense = async(req, res) => {
  const id = req.params.id;
  const expense = await Expense.findByIdAndDelete(id);
  res.send(expense);
};

module.exports = {
  createExpense,
  getExpense,
  deleteExpense
};