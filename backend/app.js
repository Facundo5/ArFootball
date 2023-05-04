const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 3000
const app = express();
require('dotenv').config();
app.set('port', port);;
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cors({origin: '*',}));

app.use('', require('./src/routes/api-external.routes'));
app.use('', require('./src/routes/my-api.routes'));

module.exports = app;