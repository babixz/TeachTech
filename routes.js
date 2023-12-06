const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const cursophpController = require("./src/controllers/cursophpController");
const cursohtmlController = require("./src/controllers/cursohtmlController");
const cursojsController = require("./src/controllers/cursojsController");

// Rotas da home
route.get("/", homeController.index);

// Rotas do curso
route.get('/cursophp/index', cursophpController.index);
route.get('/cursohtml/index', cursohtmlController.index);
route.get('/cursojs/index', cursojsController.index);

// Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


module.exports = route;
