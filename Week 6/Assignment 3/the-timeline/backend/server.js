const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/timeline')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
const messagesRouter = require('./routes/messages');
app.use('/messages', messagesRouter);

app.listen(3001, () => console.log('Server running on port 3001'));