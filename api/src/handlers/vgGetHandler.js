const videogameFindAll  = require("../controllers/vgFindAll");
const videogameFindSome = require("../controllers/vgFindSome");

const videogameGetHandler = async (req, res) => {
    try {  
        const queryObj   = req.query;
        const vgFound    = (
            queryObj.nombre!=undefined
            ? await videogameFindSome(queryObj.nombre)
            : await videogameFindAll()
        );       
        
        !vgFound.length
        ? res.status(200).json({vacio: "No existen registros/videogames en la BD"})
        : res.status(200).json(vgFound);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogameGetHandler;