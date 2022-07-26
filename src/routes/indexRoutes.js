const express = require("express");
const routes = express.Router();

routes.get("/",  (req, res) => {
    res.status(200).send({
        title: "{Reprograma} - Dom - Ajuda mútua para estudantes - Projeto Final",
        version: "1.0.0",
        message: "Recebam as boas-vindas, você está no DOM - Ajuda mútua para estudantes."
    })
})

module.exports = routes