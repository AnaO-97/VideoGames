const { Op } = require("sequelize");
const getDataBD_OUT         = require("../helpers/getDataBD_OUT");
const { Videogame, Genres } = require("../db");

const search_dataBD_MINE = async(nombre) =>{
    const videogames = (
        await Videogame.findAll({       
            where : {
                nombre : {
                    [Op.like] : `%${nombre}%`
                }
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
    const videogames = ((await getDataBD_OUT())
        .filter((game)=>{
            const aux = game.nombre;
            return (aux.includes(nombre))
        })
    );

    return videogames;
};

const videogameFindSome = async(nombre) =>{
    nombre = nombre.toUpperCase().trim();
    let someVideogames = [];
    
    someVideogames = (
        (await search_dataBD_MINE(nombre)).concat(
            (await search_dataBD_OUT(nombre))
        )
    );  

    while(someVideogames.length>15) 
        someVideogames.pop();
    
    return [...someVideogames];
};

module.exports = videogameFindSome;