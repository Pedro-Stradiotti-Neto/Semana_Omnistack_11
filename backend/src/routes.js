const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create);

routes.get("/ongs", OngController.index);

routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get("/incedents", IncidentsController.index);

routes.post("/incedents", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentsController.create);

routes.delete("/incedents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);

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