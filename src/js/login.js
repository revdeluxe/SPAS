// Load the fs (File System) module
const fs = require('fs');

// Load user data from JSON file
const userData = JSON.parse(fs.readFileSync('users.json', 'utf8'));

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

  // Check if username exists in userData and password matches
  if (userData[username] && userData[username].password === password) {
    // Show logout form and hide login form
    loginForm.reset();
    loginForm.style.display = 'none';
    logoutForm.style.display = 'block';
    loggedInUser.textContent = username;
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
