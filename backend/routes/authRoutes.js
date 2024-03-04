
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const { logout } = require('../controllers/authController');

// Register a new user
router.post('/register', authController.register);

// Verify user registration with authentication token
router.post('/verify-registration', authController.verifyRegistration);

// Log in an existing user
router.post('/login', authController.login);

// Change password
router.post('/change-password', authController.changePassword);

router.post('/logout', logout);

module.exports = router;
