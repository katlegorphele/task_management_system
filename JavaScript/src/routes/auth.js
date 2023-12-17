const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    // implement user registration here
});

router.post('/login', async (req, res) => {
    // implement user login here
});

router.post('/logout', async (req, res) => {
    // implement user logout here
});

module.exports = router;
