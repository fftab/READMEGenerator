// Requiring Axios
const axios = require("axios");
// Configure Return
require("dotenv").config();

// Setting variable to Axios Request
const api = {
    // Calling getUser
    getUser(username) {
        // Axios API Request
        return axios
        // Get JSON Object from API
            .get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
            .catch(error => {
                console.log("User Not Found, Exiting.");
                // Exiting index.js
                process.exit(1);
            })
    }
}

module.exports = api;
