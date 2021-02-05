const mongoose = require('mongoose');
const Income = require('../models/Income');

const createIncome = async(req, res) => {
  const { description, amount, category } = req.body.data;
  const date = new Date();
  const typeBalance = 'income';
  const newIncome = new Income ({ description, amount, category, date, typeBalance });

  const income = await newIncome.save();

  try {
    res.status(201).send(income);
  } catch (error) {
    console.log(error);
  };
};

const getIncome = async(req, res) => {
  const income = await Income.find()
  res.send(income);
};

const deleteIncome = async(req, res) => {
  const id = req.params.id;
  const income = await Income.findByIdAndDelete(id);
  res.send(income)
}

module.exports = {
  createIncome,
  getIncome,
  deleteIncome
};