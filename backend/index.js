const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// MongoDB connection
mongoose.connect(`mongodb+srv://pritom2001saha:Pritomsaha100@testpritom.pr2xj.mongodb.net/testDb`)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  auth0Id: String,
}));

// Endpoint to save user data
app.post('/api/save-user', async (req, res) => {
  const { name, email, auth0Id } = req.body;

  // Check if user already exists
  let user = await User.findOne({ auth0Id });
  if (!user) {
    user = new User({ name, email, auth0Id });
    await user.save();
  }

  res.json({ message: 'User saved successfully' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
