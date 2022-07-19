# Projeto final {Reprograma} Todas em Tech Back-end

># DOM - Apoio mútuo de estudantes em mobilidade urbana

A API visa possibilitar a doação de móveis de estudantes para outros estudantes que estejam se mudando de cidade para começar os estudos.

API feita como projeto final do Bootcampo Todas em Tech em Back-end da [{Reprograma}](https://reprograma.com.br/)

## Índice do Projeto
* [Introdução](#introducao)
* [Objetivo](#objetivo)
* [Tecnologias Utilizadas](#tecnologias)
* [Arquitetura MVC](#arquitetura)
* [Utilização da API](#aplicacao)
* [Mapeamento das Rotas](#rotas)
* [Futuras melhorias](#melhorias)
* [Agradecimentos](#agradecimentos)
* [Sobre a autora](#sobre)


<div id='introducao'/>

 ## 📝 Introdução 
Tendo em vista a maior mobilidade urbana proporcionada pelo ENEM, em que estudantes podem se candidatar a vagas em todo o território nacional, este projeto propõe a criação de uma API para facilitar a doação de móveis e outros objetos entre estudantes.

A ideia é que a estudante - chegando em uma cidade ou estado novo para estudar - possa se conectar com outras estudantes que estejam voltando para suas cidades natais, se mudando novamente ou simplesmente doando móveis e objetos.

Esse tipo de troca e ajuda mútua entre alunas e alunos da mesma universidade e curso são comuns, a API propõe apenas facilitar a comunicação.


<div id='objetivo'/>

 ## ♻️ Objetivo
Em construção.

<div id='tecnologias'/>

 ## 🛠️ Tecnologias e pacotes utilizados neste projeto

<br>

As seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)

 Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)

<br>

<div id='arquitetura'/>

## 📁 Arquitetura MVC

```
PROJETO_FINAL   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 donations.js
   |         |- 📑 student.js
   |         |- 📑 users.js
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 helpers
   |         |- 📑 hashPassword.js
   |     
   |    |  - 📁 middlewares
   |         |- 📑 authentication.js
   |
   |    |  - 📁 models
   |         |- 📑 donations.js
   |         |- 📑 student.js
   |         |- 📑 users.js
   |
   |    |  - 📁 routes
   |         |- 📑 donations.js
   |         |- 📑 student.js
   |         |- 📑 users.js
   | 
   |    |- 📁 test
   |         |- 📑 api.test.js
   |
   |
   |    |- 📑 app.js
   |
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js

```

<br>

<div id='aplicacao'/>

 ## 💻 Utilização da API
 Em construção.

 <div id='rotas'/>

 ## 🗺 Mapeamento das rotas
Em construção.

| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| GET         | `/all`             | Faz tal              |
| GET         | `/xxxxxx`          | Faz tal              |
| GET         | `/xxxxxxx`         | Faz tal              |
| GET         | `/xxxxxxx`         | Faz tal              |
| POST        | `/xxxxxxxxxx`      | Faz tal              |
| PATCH       | `/xxxxxxxxxxx/:id` | Faz tal              |
| DELETE      | `/delete/:id`      | Faz tal              |


<div id='melhorias'/>

## Futuras melhorias
Em construção.

<div id='agradecimentos'/>

## Agradecimentos
Em construção.

<div id='sobre'/>

## Sobre a autora

- [LinkedIn](https://www.linkedin.com/in/brena-odwyer/)
- [GitHub](https://github.com/brena-odwyer)