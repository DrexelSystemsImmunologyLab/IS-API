const mysql = require('mysql2/promise');
const express = require('express');
const router = require('./routes/route.js');

const app = express();
const port = process.env.PORT || 8082;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use('/irplus/v1/stats', router);

module.exports = { app, port };