const express = require('express');
const authControllers = require('../controllers/user');

const router = express.Router();

router.post('/', authControllers.createUserGoogleLogin);
router.get('/', authControllers.getUserGoogleLogin);

module.exports = router;