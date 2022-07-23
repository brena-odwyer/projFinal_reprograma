# Projeto final {Reprograma} Todas em Tech Back-end

># DOM - Ajua mútua de estudantes em mobilidade urbana

A API visa possibilitar a doação de móveis de estudantes para outros estudantes que estejam se mudando de cidade para começar os estudos.

API feita como projeto final do Bootcampo Todas em Tech em Back-end da [{Reprograma}](https://reprograma.com.br/)

## Índice do projeto
* [Introdução e objetivo](#introducao)
* [Tecnologias utilizadas](#tecnologias)
* [Arquitetura MVC](#arquitetura)
* [Utilização da API](#aplicacao)
* [Mapeamento das Rotas](#rotas)
* [Futuras melhorias](#melhorias)
* [Agradecimentos](#agradecimentos)
* [Sobre a autora](#sobre)


<div id='introducao'/>

 ## Introdução e objetivo
Tendo em vista a maior mobilidade urbana proporcionada pelo ENEM, em que estudantes podem se candidatar a vagas em todo o território nacional, este projeto propõe a criação de uma API para facilitar a doação de móveis e outros objetos entre estudantes.

A ideia é que a estudante - chegando em uma cidade ou estado novo para estudar - possa se conectar com outras estudantes que estejam voltando para suas cidades natais, se mudando novamente ou simplesmente doando móveis e objetos. E que estudantes que estejam se mudando possam doar seus móveis e outros objetos para estudantes chegando na mesma cidade.

Esse tipo de troca e ajuda mútua entre alunas e alunos da mesma universidade e curso são comuns, a API propõe apenas facilitar a comunicação.

O nome da API, "DOM", é uma brincadeira para estudantes de antropologia remetendo ao clássico texto de Marcel Mauss, Ensaio sobre a Dádiva, também conhecido como Ensaio sobre o Dom, em que o famoso antropólogo discute trocas recíprocas.


<div id='tecnologias'/>

 ## Tecnologias e pacotes utilizados neste projeto

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
- [Jest](https://jestjs.io/pt-BR/)
- [supertest](https://www.npmjs.com/package/supertest)
<br>

<div id='arquitetura'/>

## Arquitetura MVC

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

 ## Utilização da API
 Em construção.

 <div id='rotas'/>

 ## Mapeamento das rotas
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
- Melhorar e terminar a implementação dos testes em todas as rotas.
- Implementação do front-end.

<div id='agradecimentos'/>

## Agradecimentos
Em construção.

Readmes utilizados como referência: 
- https://github.com/anacarolliny/ReprogramaProjetoFinal
- https://github.com/KellyVieiras/Adote-um-pet

<div id='sobre'/>

## Sobre a autora

Brena O'Dwyer é antropóloga e tradutora, em transição de carreira para o desenvolvimento back-end.

- [LinkedIn](https://www.linkedin.com/in/brena-odwyer/)
- [GitHub](https://github.com/brena-odwyer)