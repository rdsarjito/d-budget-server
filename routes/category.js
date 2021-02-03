const express = require('express');
const categoryControllers = require('../controllers/category');

const router = express.Router();

router.post('/', categoryControllers.createCategory);
router.get('/', categoryControllers.getCategory);
router.get('/:id', categoryControllers.deleteCategory);

module.exports = router;