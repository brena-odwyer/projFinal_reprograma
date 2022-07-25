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

A API permite que a usuária faça seu cadastro no site, realize login, atualize seu cadastro e delete seu cadastro. Com o login realizado a usuária pode se cadastrar como estudante, listar todas as estudantes ou listar por nome, universidade, doação e id. Pode também atualizar e deletar seu cadastro de estudante. Quando cadastrada como estudante, a usuária pode cadastrar doações, listar todas as doações ou então listar por descrição, objeto e id. A usuária pode também atualizar e deletar a doação.


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
 ### 1º Passo - Clonar o respositório
Clone este projeto para a sua máquina local.
```sh
git clone https://github.com/brena-odwyer/projFinal_reprograma
```

### 2º Passo - Instalar as dependências
Para instalar as dependências do projeto, digite o comando no terminal:
```sh
npm i
```

### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.example` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações contidas no arquivo `.env` para as informações correspondentes a sua máquina e e inclua os valores para PORT com a porta, MONGO_URI com a URL do MongoDb e SECRET com o secret.

### 4º Passo - Executar a aplicação
Com a aplicação clonada e as dependências configuradas basta rodar a aplicação com o comando no terminal:
```sh
npm start
```

Para acessar via Heroku, acesse [link da API](https://dom-ajuda-mutua-estudantes.herokuapp.com//)

 <div id='rotas'/>

 ## Mapeamento das rotas

| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| GET         | `/`             | Mensagem de apresentação.             |
| POST        | `/users/register`          | Faz o cadastro da usuária.              |
| POST        | `/users/login`         | Faz o login da usuária.             |
| PUT         | `/users/update/:id`         | Faz o update do email e senha da usuária.              |
| DELETE        | `/users/delete/:id`      | Deleta a usuária.              |


| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| POST         | `/student/create`             | Cria perfil da estudante.             |
| GET         | `/student/all`          | Lista todas as estudantes.              |
| GET         | `/student/filterName`         | Lista estudantes por nome.             |
| GET         | `/students/filterUniversity`         | Lista estudantes por universidade.              |
| GET        | `/students/filterDonation`      | Lista estudantes por tipo de doação.              |
| GET       | `/students/filterById/:id` | Lista a estudante pelo id.              |
| PUT      | `/update/:id`      | Faz o update do cadastro da estudante.             |
| DELETE      | `/delete/:id`      | Deleta o cadastro da estudante.             |

| Método HTTP | Endpoint           | Descrição                                                 |
| ----------- | ------------------ | --------------------------------------------------------- |
| POST         | `/donation/create`             | Cria uma doação conectada ao perfil de uma estudante.             |
| GET         | `/donation/all`          | Lista todas as doações.              |
| GET         | `/donation/filterDescription`         | Lista as doações pela descrição.             |
| GET         | `/donation/filterObject`         | Lista as doações por objeto.              |             |
| GET       | `/donation/filterById/:id` | Lista a doação pelo id.              |
| PUT      | `/update/:id`      | Faz o update da doação.             |
| DELETE      | `/delete/:id`      | Deleta a doação.             |


<div id='melhorias'/>

## Futuras melhorias
- Melhorar e terminar a implementação dos testes em todas as rotas.
- Implementação do front-end.
- Criação de grupos por universidade, para facilitar a troca e doação de objetos.

<div id='agradecimentos'/>

## Agradecimentos
A trajetória do bootcampo da {Reprograma}, assim como as coisas boas da vida, foi cheia de altos e baixos, risos e choros, superação e aprendizado. Mas uma viagem - de um lugar em que código, desenvolvimento e back-end eram conceitos e ideias totalmente desconhecidos até aqui - se faz nas companhias e eu tive as melhores possíveis. Agradeço a todas as mulheres da turma ON15 pelo carinho, amizade, companheirismo, bom humor e apoio, essas noviças são maravilhosas!

Gostaria de agradecer também a todas as professoras que estiveram conosco nesses sábados, respondendo pacientemente a todas as minhas dúvidas: Amanda Silva, Lilit Bandeira, Hannah Freitas, Ana Lu Sampaio, Beatriz Ramerindo e Paula Allemand. Um agradecimento especial também a Bea e Hannah pelo acompanhemento nas semanas de projeto e por toda a ajuda (não só no código, mas também, e especialmente, pelo apoio moral mais do que necessário).

Participar de um projeto pensado, gerido, feito por e para mulheres é muito especial. Por isso, agradeço também a toda equipe {Reprograma},  monitoras das aulas, dos plantões de dúvida, coordenadora de ensino, Raissa e Letícia, da empregabilidade, e Ju, da orientação educacional, por segurar nossas mãos nessa jornada. E, lógico, um muito obrigada especialíssimo a Jess Guerra, melhor BTL não há.

Readmes utilizados como referência: 
- https://github.com/anacarolliny/ReprogramaProjetoFinal
- https://github.com/KellyVieiras/Adote-um-pet

<div id='sobre'/>

## Sobre a autora

Brena O'Dwyer é antropóloga e tradutora, em transição de carreira para o desenvolvimento back-end.

- [LinkedIn](https://www.linkedin.com/in/brena-odwyer/)
- [GitHub](https://github.com/brena-odwyer)
- [Currículo] (https://brena-odwyer.github.io/)