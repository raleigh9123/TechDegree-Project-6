const express = require('express');
const path = require('path');
const {data} = require('./data.json');
// const bodyParser = require('./body-parser');
// const cookieParser = require('./cookie-parser');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
