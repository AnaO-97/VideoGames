const { Videogame, Genres } = require("../db")
const   getDataBD_OUT  = require("../helpers/getDataBD_OUT");

const filterBD_MINE = async (attribute,value) =>{
    const videogameBD_MINE = (
        await Videogame.findAll({       
            where : {
                [attribute] : value,
            },
            
            attributes : ["vgMine","id","nombre","imagen","plataformas"],
            
            include    : {
                model      :  Genres,
                attributes : ["nombre"],
                through    : { attributes : [] } 
            }
        })
    );

    return videogameBD_MINE;
}

const filterBD_OUT = async (attribute, value) =>{  
    const videogameBD_OUT = ((await getDataBD_OUT())
        .filter(            
            (element)=>element[attribute] === value
        )
    );

    return videogameBD_OUT;
}

const videogameFindOne = async (attrPok) => {
    let [ attribute,value ] = attrPok;  
    
    attribute = attribute.toString(); 

    value     = (
        isNaN(value[0])
        ? value[0].toString().toUpperCase() 
        : parseInt(value[0],10)
    );

    const dataBD_MINE = await filterBD_MINE(attribute,value); 
    const dataBD_OUT  = await filterBD_OUT(attribute,value);
    
    return [...dataBD_MINE,...dataBD_OUT];
};

module.exports = videogameFindOne;