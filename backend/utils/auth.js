// utils/auth.js

// Function to clear authentication token from cookies
exports.clearCookie = (req, res) => {
    // Clear the authentication token cookie
    res.clearCookie('authToken');
  };
  