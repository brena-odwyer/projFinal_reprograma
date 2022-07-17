const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();


const userRoutes = require("./routes/user");

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

module.exports = app;