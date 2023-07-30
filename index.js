'use strict';

require('dotenv').config();
const PORT = process.env.PORT;

const { start } = require('./server');
start(PORT);
console.log('test AI review')