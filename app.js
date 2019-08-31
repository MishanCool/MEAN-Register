require('./config/config.js');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//start server
app.listen(process.env.PORT, () => console.log(`Server start at port: ${process.env.PORT}`));
