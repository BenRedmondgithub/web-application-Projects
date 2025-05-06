const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const verifyToken = require('../middleware/verifyToken');

router.use(verifyToken);

router.get('/', async (req, res) => {
    const tasks = await Task.find({ uid: req.uid });
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const newTask = new Task({ ...req.body, uid: req.uid });
    await newTask.save();
    res.json(newTask);
});

router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
});

module.exports = router;
// This code defines a set of routes for managing tasks in a task manager application.