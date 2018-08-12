const express = require('express');
const router = express.Router();


// data/db module export Connection object which has 3 attribute including db

const db = require('../data/db.js')

var delis;

db.connect({ useNewUrlParser: true }).then(function (db) {
    // var result = db.collection('delis').find();  // works
    // console.log(result);
    delis = db.collection('delis');
});


// doesn't work
// let delis = connection.connect().then(function (db) {
//         results = db.collection('delis').find();
//         console.log(results);
// });


/* ====================================== */
// Route Definitions
/* ====================================== */

// GET Routes
router.get('/', (request, response, next) => {
    console.log("You made it to the router. Nice work!");
    response.send("API index");
});

router.get('/delis', (request, response, next) => {
    console.log("You're on the quest for heros.");

    delis.find().toArray(function(err, results) {
        response.send(results);
    });
});


// POST Routes
router.post('/delis/', (request, response) => {
    console.log(request.body);
    delis.insertOne(request.body, (err, result) => {
        if (err) return console.log(err);
        response.send("Here's the data that was saved: " + JSON.stringify(request.body));
    });
});

// PUT routes

// DELETE routes
module.exports = router;