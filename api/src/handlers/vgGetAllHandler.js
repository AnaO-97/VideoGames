const videogameFindAll  = require("../controllers/vgFindAll");
const videogameFindSome = require("../controllers/vgFindSome");

const searchAll = async() =>{  
    let videogames =  [];
    videogames = await videogameFindAll();
    return videogames;
};

const searchSome = async(nombre)=>{
    let videogames = [];
    videogames = await videogameFindSome(nombre)
    return videogames;
};

const videogameGetALLHandler = async (req, res) => {
    try {        
        const queryObj   = req.query;
        const vgFound    = await (
            queryObj.nombre!=undefined
            ? searchSome(queryObj.nombre)
            : searchAll ()
        );
        
        vgFound.length === 0
        ? res.status(200).json({vacio: "No existen registros/videogames en la BD"})
        : res.status(200).json(vgFound);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogameGetALLHandler;