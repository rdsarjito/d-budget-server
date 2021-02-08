const express = require('express');
const router = express.Router();

const accesToken = require('../middlewares/accesToken');
const incomeControllers = require('../controllers/income');

router.post('/', accesToken, incomeControllers.createIncome);
router.get('/', accesToken, incomeControllers.getIncome);
router.delete('/:id', accesToken, incomeControllers.deleteIncome);

module.exports = router;