const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Display tasks list
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getAll();
        res.render('tasks/index', { tasks });
    } catch (err) {
        res.status(500).render('error', { error: 'Failed to load tasks' });
    }
});

// Handle new task creation
router.post('/', async (req, res) => {
    const { title } = req.body;
    
    if (!title || title.trim() === '') {
        return res.status(400).render('tasks/index', { 
            error: 'Task title cannot be empty',
            tasks: await Task.getAll()
        });
    }

    try {
        await Task.create(title.trim());
        res.redirect('/tasks');
    } catch (err) {
        res.status(500).render('error', { error: 'Failed to create task' });
    }
});

module.exports = router; 