const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
const crtl = './controllers/';

//security
app.disable('x-powered-by')
app.use(helmet());
app.use(mongoSanitize({
    replaceWith: '_'
}))
app.set('trust proxy', 1);
app.use(limiter);

//middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('dev'));//develop use
//app.use(require(crtl+'closeRest.ctrl'));

//routes
app.use(require(crtl + 'getScores.ctrl'));
app.use(require(crtl + 'addScore.ctrl'));


module.exports = app;
