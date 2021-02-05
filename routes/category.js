const express = require('express');
const router = express.Router();

const { createCategory, getCategory, deleteCategory } = require('../controllers/category');

router.post('/', createCategory);
router.get('/', getCategory);
router.delete('/:id', deleteCategory);

module.exports = router;