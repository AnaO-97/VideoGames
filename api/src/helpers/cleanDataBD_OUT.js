const cleanPlataformas = (rawPlataformas) =>{
    const arrayPlataformas = [];
    
    rawPlataformas.map((plataforma)=>{
        arrayPlataformas.push(
            plataforma.platform.name.toUpperCase()
        )
    });

    return arrayPlataformas;
};

const cleanGeneros = (rawGenres) =>{
    const arrayGeneros = [];

    rawGenres.map((genero) =>{
        arrayGeneros.push({
            nombre : genero.name.toUpperCase()
        })
    })

    return arrayGeneros;
};

const cleanDataBD_OUT = (data) =>{
    const BD_OUT  = [];
    let   objAuxi = {};

    data.map((vidGame) => {
        objAuxi.vgMine  = false;
        objAuxi.id      = vidGame.id;
        objAuxi.nombre  = vidGame.name.toUpperCase();
        objAuxi.rating  = vidGame.rating;
        objAuxi.imagen  = vidGame.background_image; 
        objAuxi.lanzamiento = vidGame.released;
        objAuxi.descripcion = vidGame.description;
        objAuxi.Genres      = cleanGeneros(vidGame.genres);
        objAuxi.plataformas = cleanPlataformas(vidGame.platforms);
        
        BD_OUT.push(objAuxi);
        objAuxi = {};
    });

    return BD_OUT;
};

module.exports = cleanDataBD_OUT;