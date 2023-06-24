const videogameFindAll = require("../controllers/vgFindAll");
const videogameFindOne = require("../controllers/vgFindOne");

const videogameGetALLHandler = async(req, res) => {
    try {
        const queryObj   = req.query;
        let   videogames = [];

        if(Object.entries(queryObj).length === 0){           
            videogames = await videogameFindAll();

            videogames.length === 0
            ? res.status(200).json({vacio: "No existen registros/videogames en la BD"})
            : res.status(200).json(videogames);
        }
            
        else{
            const attribute = Object.keys(queryObj);
            const value     = Object.values(queryObj);

            const auxi = [attribute,value]
                    
            videogames = await videogameFindOne(auxi)
        
            videogames.length === 0
            ? res.status(200).json({vacio: `No existen registros con el atributo { ${attribute} : ${value} }`})
            : res.status(200).json(videogames);
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogameGetALLHandler;