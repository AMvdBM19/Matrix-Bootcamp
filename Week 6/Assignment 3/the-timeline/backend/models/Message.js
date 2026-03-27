const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author:  { type: String, default: 'Anonymous' },
  content: { type: String, required: true },
  date:    { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  author:   { type: String, default: 'Anonymous' },
  content:  { type: String, required: true },
  date:     { type: Date, default: Date.now },
  comments: [commentSchema]   // array of comments embedded in message
});

module.exports = mongoose.model('Message', messageSchema);