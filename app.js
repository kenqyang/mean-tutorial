const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//const deliRoutes = require('./api/routes/delis');

const deliRoutes = require('./api/routes/route');

// need for post json processing other wise complaing about '_id' of undefined error
const bodyParser = require('body-parser');


// app.use((request, response, next) => {
//     response.status(200).json({
//         message: "You're becoming a hero!"
//     });
// });

app.listen(port, ()=> {
    console.log('process.env.PORT %s = ', process.env.PORT);
    console.log('Express.js server is listening on Port %s.', port);
});

// need for json post processing
// app.use(bodyParser());
app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: true }));

// now we user routing per deliRoutes, so need to comment above use block
app.use('/', deliRoutes);

module.exports = app;


