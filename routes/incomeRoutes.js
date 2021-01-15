const mongoose = require('mongoose');
const Income = mongoose.model('incomes');

module.exports = app => {
  app.post('/api/income', async (req, res) => {
    console.log(req.body);
    const { description, amount } = req.body.dataIncome;
    const newIncome = new Income ({ description, amount });

    const dataIncome = await newIncome.save();
    res.status(201).send(dataIncome)
  })
};