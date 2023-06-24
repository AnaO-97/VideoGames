const { Videogame, Genres } = require("../db");
const getDataBD_OUT = require("../helpers/getDataBD_OUT")


const videogameFindAll = async() =>{
    let dataBD_MINE  = await Videogame.findAll({
        attributes : ["vgMine","id","nombre","imagen","plataformas"],
        include    : {
            model      :  Genres,
            attributes : ["nombre"],
            through    : { attributes : [] } 
        }
    });
      
    const dataBD_OUT = await getDataBD_OUT();    
    
    return ([...dataBD_MINE, ...dataBD_OUT]); 
};

module.exports = videogameFindAll;