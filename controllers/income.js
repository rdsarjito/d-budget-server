const mongoose = require('mongoose');
const Income = mongoose.model('incomes');

const createincome = (req, res) => {
  const { description, amount, category } = req.body.data;
  const date = new Date();
  const typeBalance = 'income';
  const newIncome = new Income ({ description, amount, category, date, typeBalance });

  const data = newIncome.save();

  try {
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  };
};

module.exports = {
  createincome
};