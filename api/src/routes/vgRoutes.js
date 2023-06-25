const { Router }      = require('express');
const videogamePostHandler   = require("../handlers/vgPostHandler");
const videogameGetHandler    = require("../handlers/vgGetHandler");
const videogameGetONEHandler = require("../handlers/vgGetONEHandler");


const videogamesRoutes = Router();

videogamesRoutes.get ("/",      videogameGetHandler);
videogamesRoutes.get ("/:idVG", videogameGetONEHandler);
videogamesRoutes.post("/", videogamePostHandler);

module.exports = videogamesRoutes;