const express = require('express');
const router = express.Router();
const { logout } = require('../controllers/authController');

// Logout route
router.post('/', logout);

module.exports = router;
