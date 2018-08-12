const express = require('express');
const router = express.Router();

/* ====================================== */
// Route Definitions
/* ====================================== */

// GET routes
router.get('/', (request, response, next) => {
    console.log("You made it to the router. Nice work!");
    response.send("API index");
});

router.get('/delis',(request, response, next) => {
    console.log("You're on the quest for heros.");
    response.send("Delis index");
});

// POST routes

// PUT routes

// DELETE routes

// Export Router for use in app.js
module.exports = router;