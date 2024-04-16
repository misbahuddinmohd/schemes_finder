const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://nagmp6667111:vpyGhWQVhHEzN14K@cluster0.wfwc1o7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace 'your_mongodb_uri_here' with your actual MongoDB URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define Schema and Model for Form Data
const formDataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  caste: String,
  income: Number,
});
const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.post('/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
