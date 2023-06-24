const getDataBD_OUT         = require("../helpers/getDataBD_OUT");
const { Videogame, Genres } = require("../db");

const search_dataBD_MINE = async(nombre) =>{
    const videogames = (
        await Videogame.findAll({       
            where : {
                nombre,
            },
            
            attributes : ["vgMine","id","nombre","imagen","plataformas"],
            
            include    : {
                model      :  Genres,
                attributes : ["nombre"],
                through    : { attributes : [] } 
            }
        })
    );

    return videogames;
};

const search_dataBD_OUT = async(nombre) =>{
    const videogamesAll = ((await getDataBD_OUT())
        .filter((game)=>{
            return (game.nombre === nombre)
        })
    );
};

const videogameFindSome = async(nombre) =>{
    let someVideogames = [];
    
    someVideogames = await search_dataBD_MINE(nombre);

    someVideogames = [
        ...someVideogames,
        await search_dataBD_OUT(nombre)
    ];

    return someVideogames;
};

module.exports = videogameFindSome;