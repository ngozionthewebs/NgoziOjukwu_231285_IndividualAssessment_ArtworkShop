const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Import routes
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');

// Use routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Define a simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello from the Artwork Shop API!');
});

// Catch-all error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
