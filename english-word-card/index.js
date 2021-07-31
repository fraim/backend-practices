const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const autoIncrement = require('mongoose-auto-increment');
const app = express();

app.use(cors());
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
);

// Initialize autoIncrement for cards
autoIncrement.initialize(mongoose.connection);

// Import Routes
const cardsRoute = require('./routes/cards');

// Middleware
app.use(express.json());

// Route Middleware
app.use('/api/cards', cardsRoute);

app.post('/api/', (req, res) => {
    res.json({ message: 'Hello world' })
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));