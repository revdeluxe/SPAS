const fs = require('fs');

// Read login credentials from users.json
const users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

// Login Form Element
const loginForm = document.getElementById('loginFormElement');

// Logout Form Elements
const logoutForm = document.getElementById('logoutForm');
const loggedInUser = document.getElementById('loggedInUser');
const logoutBtn = document.getElementById('logoutBtn');

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get username and password
  const username = loginForm.elements['username'].value;
  const password = loginForm.elements['password'].value;

  // Check if username exists in users and password matches
  if (users[username] && users[username].password === password) {
    // Redirect to a specific HTML page
    window.location.href = '.../home.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

// Event listener for logout button click
logoutBtn.addEventListener('click', function() {
  // Show login form and hide logout form
  loginForm.style.display = 'block';
  logoutForm.style.display = 'none';
});
