const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.js');
const { createUserGoogleLogin, getUserGoogleLogin } = require('../controllers/user');

router.post('/', createUserGoogleLogin);
router.get('/', auth, getUserGoogleLogin);

module.exports = router;