const express = require('express');

const Incidentscontroller = require('./controllers/Incidentscontroller');
const Ongcontroller = require('./controllers/Ongcontroller');
const Profilecontroller = require('./controllers/Profilecontroller');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// Criando registro de Ongs e seus id's;
routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

routes.get('/profile', Profilecontroller.index);

routes.post('/sessions', SessionController.create);

// Criando registro de casos basiados nos id's das ongs;
routes.get('/incidents', Incidentscontroller.index);
routes.post('/incidents', Incidentscontroller.create);
routes.delete('/incidents/:id', Incidentscontroller.delete);

module.exports = routes; 