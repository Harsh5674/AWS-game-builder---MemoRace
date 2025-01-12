// const express = require('express');
// const cors = require('cors');
// require("dotenv").config();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}))
// app.use(cors());

// // Simulate a database with an in-memory array
// // let leaderboardDB = [];

// // // Endpoint to add a leaderboard entry
// // app.post('/leaderboard', (req, res) => {
// //     const { name, score, date } = req.body;
// //     if (!name || !score || !date) {
// //         return res.status(400).json({ error: 'Name, score, and date are required.' });
// //     }

// //     // Add entry to the "database"
// //     leaderboardDB.push({ name, score, date });

// //     // Sort and limit to top 10 scores
// //     leaderboardDB.sort((a, b) => b.score - a.score);
// //     leaderboardDB = leaderboardDB.slice(0, 10);

// //     res.status(201).json({ message: 'Leaderboard updated successfully.', leaderboard: leaderboardDB });
// // });

// // // Endpoint to get the leaderboard
// // app.get('/leaderboard', (req, res) => {
// //     res.json(leaderboardDB);
// // });

// const PORT = 7000;

// app.get("/test", async(req,res) => {
//     res.json({message: "Hello from express endpoint!"});
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb+srv://game:gamery@aws1.vunqs.mongodb.net/?retryWrites=true&w=majority&appName=AWS1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  name: String,
  lastLogin: Date,
  highScore: {
    type: Number,
    default: 0
  },
  gamesPlayed: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);

// Add this schema after your userSchema
const highScoreSchema = new mongoose.Schema({
    auth0Id: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const HighScore = mongoose.model('HighScore', highScoreSchema);
  
  // Add these new endpoints
  // Save new score
  app.post('/api/scores', async (req, res) => {
    try {
      const { auth0Id, score } = req.body;
      
      const newScore = new HighScore({
        auth0Id,
        score
      });
      
      await newScore.save();
      
      // Get top 5 scores for this user after saving new score
      const topScores = await HighScore.find({ auth0Id })
        .sort({ score: -1 })
        .limit(5);
      
      res.status(201).json(topScores);
    } catch (error) {
      console.error('Error saving score:', error);
      res.status(500).json({ error: 'Failed to save score' });
    }
  });
  
  // Get top 5 scores for a user
  app.get('/api/scores/:auth0Id', async (req, res) => {
    try {
      const { auth0Id } = req.params;
      const topScores = await HighScore.find({ auth0Id })
        .sort({ score: -1 })
        .limit(5);
      
      res.json(topScores);
    } catch (error) {
      console.error('Error fetching scores:', error);
      res.status(500).json({ error: 'Failed to fetch scores' });
    }
  });
  

// API endpoint to create/update user
app.post('/api/users', async (req, res) => {
  try {
    const userData = req.body;
    console.log('Received user data:', userData);

    // Try to find existing user
    const existingUser = await User.findOne({ auth0Id: userData.auth0Id });
    
    if (existingUser) {
      // Update existing user
      existingUser.lastLogin = userData.lastLogin;
      if (userData.email) existingUser.email = userData.email;
      if (userData.name) existingUser.name = userData.name;
      
      await existingUser.save();
      res.json(existingUser);
    } else {
      // Create new user
      const newUser = new User(userData);
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// Start server
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
