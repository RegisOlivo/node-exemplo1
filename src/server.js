const express = require('express');
const mongoose = require('mongoose');

const { ValidationError } = require('express-json-validator-middleware');

const app = express();
const cors = require('cors');
const routes = require('./routes/routes');


mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// Reconhecer o body da requisição como JSON
app.use(express.json());

app.use(cors())
;app.use(routes);



// Error handler for valication errors
app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        // At this point you can execute your error handling code
        res.status(400).json(err);
        next();
    }
    else next(err); // pass error on if not a validation error
});

app.listen(3000);