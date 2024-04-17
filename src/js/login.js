function login(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Example validation (replace with your own validation logic)
    if (username === 'user' && password === 'password') {
      // Create session using jsSIP.js (replace with your jsSIP implementation)
      const session = createSession(username);
  
      // Store session information in sessionStorage
      sessionStorage.setItem('session', JSON.stringify(session));
  
      // Redirect to the next page
      window.location.href = 'nextpage.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  function createSession(username) {
    // Example session creation using jsSIP.js
    const session = {
      username: username,
      // Add other session information as needed
    };
    // Implement jsSIP session creation logic here
    return session;
  }
  