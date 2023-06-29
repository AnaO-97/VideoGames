const videogameFindOne = require("../controllers/vgFindOne");

const videogameGetONEHandler = async(req, res) =>{
    try {
        const { idVideogame } = req.params;

        let    videogame    = {};
        const whereSource = isNaN(idVideogame) ? "BD_MINE" : "BD_OUT";

        videogame = await videogameFindOne(idVideogame,whereSource);
        
        if(!videogame)
            res.status(200).json({vacio: `No existen registros para el {ID : ${idVideogame}}`});        
        else
            res.status(200).json(videogame);  

    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = videogameGetONEHandler;