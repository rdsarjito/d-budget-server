const mongoose = require('mongoose');
const Income = mongoose.model('incomes');

const createIncome = async(req, res) => {
  const { description, amount, category } = req.body.data;
  const date = new Date();
  const typeBalance = 'income';
  const newIncome = new Income ({ description, amount, category, date, typeBalance });

  const data = await newIncome.save();

  try {
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  };
};

const getIncome = async (req, res) => {
  Income.find()
    .then(description => res.json(description));

module.exports = {
  createIncome
};