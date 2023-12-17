const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Route handler for POST req made to '/'
router.post('/', async (req, res) => {
    // implement code to create task here
});

// Route handler for GET req made to '/'
router.get('/', async (req, res) => {
    // To be done
});

// Route handler for GET req made to '/:id'
router.get('/:id', async (req, res) => {
    // To be done
});

// Route handler for PUT req made to '/:id'
router.put('/:id', async (req, res) => {
    // To be done
});

// Route handler for DELETE req made to '/:id'
router.delete('/:id', async (req, res) => {
    // To be done
});

module.exports = router;