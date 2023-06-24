const { Router }      = require('express');
const videogameGetALLHandler = require("../handlers/vgGetAllHandler");
const videogamePostHandler = require("../handlers/vgPostHandler");

const videogamesRoutes = Router();

videogamesRoutes.get ("/", videogameGetALLHandler);
videogamesRoutes.post("/", videogamePostHandler);

module.exports = videogamesRoutes;