const { Router }      = require('express');
const videogamePostHandler   = require("../handlers/vgPostHandler");
const videogameGetHandler    = require("../handlers/vgGetHandler");
const videogameGetONEHandler = require("../handlers/vgGetONEHandler");


const videogamesRoutes = Router();

videogamesRoutes.post("/", videogamePostHandler);
videogamesRoutes.get ("/", videogameGetHandler);
videogamesRoutes.get ("/:idVideogame", videogameGetONEHandler);

module.exports = videogamesRoutes;