const { Router }      = require('express');
const videogamePostHandler    = require("../handlers/vgPostHandler");
const videogameGetALLHandler  = require("../handlers/vgGetAllHandler");


const videogamesRoutes = Router();

videogamesRoutes.get ("/", videogameGetALLHandler);
videogamesRoutes.post("/", videogamePostHandler);

module.exports = videogamesRoutes;