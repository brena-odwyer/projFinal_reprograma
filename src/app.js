const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();


const userRoutes = require("./routes/user");
const studentRoutes = require("./routes/student");

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/student", studentRoutes);

module.exports = app;