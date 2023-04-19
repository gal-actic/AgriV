const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();

// Set up session middleware
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

// User model
const users = [{
  email: 'user@example.com',
  password: '$2b$10$USj5P5oys/lzvHV8WJr3z.kwnlQOWPT/Ld61JYmBm.u0B90roXOeO' // hashed password
}];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = email;
    res.redirect('/protected');
  } else {
    res.send('Invalid email or password');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Middleware to protect the route
const requireLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Protected route
app.get('/protected', requireLogin, (req, res) => {
  const user = users.find(user => user.email === req.session.user);
  res.send(`Welcome, ${user.email}! This is sensitive information.`);
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));

//app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
//})
