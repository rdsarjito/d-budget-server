const express = require('express');
const router = express.Router();

const categoryControllers = require('../controllers/category');


router.post('/', categoryControllers.createCategory);
router.get('/', categoryControllers.getCategory);
router.get('/:id', categoryControllers.deleteCategory);

module.exports = router;