const { Router } = require('express');
const genresRoutes       = require("./genresRoutes");
const videogamesRoutes   = require("./vgRoutes");
const genresChargeBD_OUT = require('../middlewares/genresChargeBD_OUT');

const router = Router();

router.use(genresChargeBD_OUT);
router.use("/videogames",videogamesRoutes);
router.use("/genres",genresRoutes);


module.exports = router;
