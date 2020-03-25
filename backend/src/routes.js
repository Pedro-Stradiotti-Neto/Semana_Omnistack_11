const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incedents", IncidentsController.index);
routes.post("/incedents", IncidentsController.create);
routes.delete("/incedents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;

/**
 * Métodos HTTP
 *
 * GET: Buscar/listar informacões
 * POST: Cadastrando informacões
 * PUT: Alterar informacões
 * DELETE: Deletar informacões
 */

/**
 * Tipos de parâmetros
 *
 * Query Params (req.query): Parâmetros nomeados enviados na rota após o símbolo "?" (Filtros e Paginacão)
 *     |-> dados enviados na URL (/users?name:Pedro&idade:25)
 *          |-> ?: Filtrar de acordo com os dados passados / &: Envio de mais de um dado
 *     |-> no código (app.get("/users", ...))
 * Route Params (req.params): Parâmetros utilizados para identificar recursos
 *     |-> dados enviados na URL (/users/1)
 *     |-> no código (app.get("/users/:id", ...))
 * Request Body: Corpo da requisicão, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where();
 */