const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 }); // newest first
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new message
router.post('/', async (req, res) => {
  try {
    const message = new Message({ content: req.body.content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST a comment on a message
router.post('/:id/comments', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    message.comments.push({ content: req.body.content });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a message
router.delete('/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;