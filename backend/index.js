const express = require('express');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Session setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // for local development, switch to true in production
}));

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Express Backend!" });
});

// Redirect to GitHub for login
app.get('/auth/github', (req, res) => {
  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
  res.redirect(githubLoginUrl);
});

// Handle GitHub callback
app.get('/auth/github/callback', async (req, res) => {
  try {
    const code = req.query.code;
    const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code
    }, {
      headers: { accept: 'application/json' }
    });

    const accessToken = tokenResponse.data.access_token;
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        accept: 'application/json',
        Authorization: `token ${accessToken}`
      }
    });

    const user = userResponse.data;
    req.session.user = user;

    console.log("User", user)
    res.redirect('/success'); // or wherever you'd like to take the user after login

  } catch (error) {
    console.error("Error fetching access token", error);
    res.redirect('/error');
  }
});

app.get('/success', (req, res) => {
    res.redirect('http://localhost:3000');
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
