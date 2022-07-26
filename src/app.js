const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();


const userRoutes = require("./routes/user");
const studentRoutes = require("./routes/student");
const donationRoutes = require("./routes/donation");
const indexRoutes = require("./routes/indexRoutes")

// app.use((req, res, next) => console.log(req.url, next()))
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//     res.status(200).send({title: "Reprograma -> Dom - Ajuda mútua para estudantes - Projeto Final",
//     version: "1.0.0",
//     mensagem: "Recebam as boas-vindas, você está no DOM - Ajuda mútua para estudantes"
//     })
// }); //endpoint para subir no heroku, organizei melhor criando um arquivo routes para essa finalidade.

app.use("/", indexRoutes)
app.use("/users", userRoutes);
app.use("/student", studentRoutes);
app.use("/donation", donationRoutes);

module.exports = app;