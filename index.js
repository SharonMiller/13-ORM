'use strict';

require('dotenv').config();

require('babel-register');

const mongoose =  require ('mongoose');
mongoose.connect(process.env.MONGODB_URI);

require('babel-register');

// const app = require('./src/app.js');

// app.listen(process.env.PORT);
require('./src/app.js').start(process.env.PORT);

