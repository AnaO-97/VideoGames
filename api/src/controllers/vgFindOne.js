const axios = require("axios");
const { API_KEY } = process.env;
const cleanDataBD_OUT = require("../helpers/cleanDataBD_OUT");
const { Videogame, Genres } = require("../db")

const videogameFindOne = async (idVideogame, source) => {
    let videogameFound = {};

    switch (source) {
        case "BD_MINE":{
            videogameFound = await Videogame.findByPk(idVideogame,{
                include : {
                    model      :  Genres,
                    attributes : ["nombre"],
                    through    : { attributes : [] } 
                }
            });
        } 
        break;                      
    
        case "BD_OUT":{            
            const auxi = [(
                await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
            ).data];

            videogameFound = cleanDataBD_OUT(auxi);
        } 
        break;

        default:
            return "Indicar donde realizar la búsqueda";
    } 
            
    return videogameFound;
};

module.exports = videogameFindOne;