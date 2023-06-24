const { Router }      = require('express');
const genresGetHandler= require("../handlers/genresGetHandler");

const genresRoutes = Router();

genresRoutes.get ("/", genresGetHandler);

module.exports = genresRoutes;